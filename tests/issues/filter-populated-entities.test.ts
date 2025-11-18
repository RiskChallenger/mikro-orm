import { Collection, Entity, Loaded, ManyToMany, ManyToOne, MikroORM, OneToMany, Populate, PrimaryKey, Property } from '@mikro-orm/sqlite';

@Entity()
class Organization {

  @PrimaryKey()
  id!: number;

  @Property()
  name: string;

  @OneToMany(() => Department, d => d.organization)
  departments = new Collection<Department>(this);

  @ManyToMany(() => Employee, e => e.organizationsToDirect, { owner: true })
  directors = new Collection<Employee>(this);

  constructor(name: string) {
    this.name = name;
  }

}

@Entity()
class Department {

  @PrimaryKey()
  id!: number;

  @Property()
  name: string;

  @ManyToOne(() => Organization)
  organization: Organization;

  @ManyToMany(() => Employee, e => e.departments, { owner: true })
  employees = new Collection<Employee>(this);

  constructor(name: string, organization: Organization) {
    this.name = name;
    this.organization = organization;
  }

}

@Entity()
class Employee {

  @PrimaryKey()
  id!: number;

  @Property()
  name: string;

  @ManyToMany(() => Department, d => d.employees)
  departments = new Collection<Department>(this);

  @ManyToMany(() => Organization, o => o.directors)
  organizationsToDirect = new Collection<Organization>(this);

  constructor(name: string) {
    this.name = name;
  }

}

let orm: MikroORM;

let alice: Employee;
let bob: Employee;
let charlie: Employee;


beforeAll(async () => {
  orm = await MikroORM.init({
    entities: [Organization, Department, Employee],
    dbName: ':memory:',
  });
  await orm.schema.refreshDatabase();
  alice = orm.em.create(Employee, { name: 'Alice' });
  bob = orm.em.create(Employee, { name: 'Bob' });
  charlie = orm.em.create(Employee, { name: 'Charlie' });

  orm.em.create(Organization, {
    name: 'My organization',
    directors: [alice],
    departments: [{
      name: 'HR',
      employees: [],
    }, {
      name: 'IT',
      employees: [bob, charlie],
    }],
  });

  await orm.em.flush();
});
afterAll(() => orm.close(true));

async function fetchOrganizationForEmployee<P extends 'departments' | 'departments.employees' | 'directors'>(employee: Employee, populate: Populate<Organization, P>): Promise<Loaded<Organization, P>[]> {

  return await orm.em.find<Organization, P>(Organization, {
    $or: [{
      directors: employee,
    }, {
      departments: {
        employees: employee,
      },
    }],
  }, {
    populate,
    /* V -- This only works for limiting the departments a regular employee can see, it blocks directors from seeing departments */
    // populateWhere: {
    //   departments: {
    //     employees: {
    //       $some: employee,
    //     },
    //   },
    // },

    /* V -- This removes all departments for both employees and directors */
    // populateWhere: {
    //   departments: {
    //     $or: [{
    //       employees: {
    //         $some: employee,
    //       },
    //     }, {
    //       organization: {
    //         directors: {
    //           $some: employee,
    //         },
    //       },
    //     }],
    //   },
    // },

    /* V -- This always returns all departments, even for employees who shouldn't see them all*/
    // populateFilter: {
    //   departments: {
    //     $or: [{
    //       employees: {
    //         $some: employee,
    //       },
    //     }, {
    //       organization: {
    //         directors: {
    //           $some: employee,
    //         },
    //       },
    //     }],
    //   },
    // },
    /* V -- This removes the departments for the director */
    // populateWhere: PopulateHint.INFER,
  });
}

describe('Testing populateWhere or populateFilter', () => {

  test('should fetch all departments for the director of the company', async () => {
    const organizationsForAlice = await fetchOrganizationForEmployee(alice, ['departments']);

    expect(organizationsForAlice).toHaveLength(1);
    expect(organizationsForAlice[0].departments).toHaveLength(2);
  });

  test('should fetch only the employee\'s own department', async () => {
    const organizationsForBob = await fetchOrganizationForEmployee(bob, ['departments']);

    expect(organizationsForBob).toHaveLength(1);
    expect(organizationsForBob[0]!.departments).toHaveLength(1);
  });

});
