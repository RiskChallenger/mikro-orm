import { Entity, IdentifiedReference, OneToOne, PrimaryKey, Property, wrap } from '@mikro-orm/core';
import { MikroORM } from '@mikro-orm/sqlite';
import { mockLogger } from '../helpers';

@Entity()
class Project {

  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @OneToOne(() => User, u => u.project1, {
    eager: true,
    orphanRemoval: true,
    wrappedReference: true,
  })
  owner?: IdentifiedReference<User>;

  @OneToOne(() => User, u => u.project2, {
    eager: true,
    wrappedReference: true,
  })
  secondaryOwner?: IdentifiedReference<User>;

}

@Entity()
class User {

  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @OneToOne({
    entity: () => Project,
    wrappedReference: true,
    nullable: true,
  })
  project1?: IdentifiedReference<Project>;

  @OneToOne({
    entity: () => Project,
    wrappedReference: true,
    nullable: true,
  })
  project2?: IdentifiedReference<Project>;

}

let orm: MikroORM;

beforeAll(async () => {
  orm = await MikroORM.init({
    entities: [Project, User],
    dbName: ':memory:',
  });
});

beforeEach(async () => {
  await orm.schema.refreshDatabase();
});

async function createProject() {
  const p = orm.em.create(Project, {
    name: 'project name',
    owner: {
      name: 'Peter',
    },
    secondaryOwner: {
      name: 'Mary',
    },
  });

  await orm.em.flush();
  orm.em.clear();

  return orm.em.findOneOrFail(Project, p);
}

afterAll(async () => {
  await orm.close(true);
});

test('change a 1:1 relation with a new entity and delete the old one 1', async () => {
  const project = await createProject();
  const oldOwner = project.owner!;
  const newOwner = orm.em.create(User, { name: 'Johnny' });
  project.owner = wrap(newOwner).toReference();
  expect(oldOwner.unwrap().project1).toBeUndefined();
  const mock = mockLogger(orm, ['query']);
  await orm.em.flush();

  const queries = mock.mock.calls.map(q => q[0]);

  expect(queries[1]).toMatch('delete from `user` where `id` in (?)');
  expect(queries[2]).toMatch('insert into `user` (`name`, `project1_id`) values (?, ?)');

  const oldOwner2 = await orm.em.fork().findOne(User, oldOwner.id);
  expect(oldOwner2).toBeNull();
});

test('change a 1:1 relation twice with a new entity and delete the old one 1', async () => {
  const project = await createProject();
  const oldOwner = project.owner!;
  const newOwner = orm.em.create(User, { name: 'Johnny' });
  project.owner = wrap(newOwner).toReference();
  expect(oldOwner.unwrap().project1).toBeUndefined();
  const mock = mockLogger(orm, ['query']);
  await orm.em.flush();

  const queries = mock.mock.calls.map(q => q[0]);

  expect(queries[1]).toMatch('delete from `user` where `id` in (?)');
  expect(queries[2]).toMatch('insert into `user` (`name`, `project1_id`) values (?, ?)');

  // const oldOwner2 = await orm.em.fork().findOne(User, oldOwner.id);
  // expect(oldOwner2).toBeNull();

  // Trying this again in the same run will fail somehow

  const oldOwner3 = project.owner!;
  const newOwner2 = orm.em.create(User, { name: 'Hank' });
  project.owner = wrap(newOwner2).toReference();
  expect(oldOwner3.unwrap().project1).toBeUndefined();
  await orm.em.flush();


  expect(queries[4]).toMatch('delete from `user` where `id` in (?)');
  expect(queries[5]).toMatch('insert into `user` (`name`, `project1_id`) values (?, ?)');
});

test('change a 1:1 relation with a new entity and not delete the old one', async () => {
  const project = await createProject();
  const oldOwner = project.secondaryOwner!;
  const newOwner = orm.em.create(User, { name: 'Johnny' });
  project.secondaryOwner = wrap(newOwner).toReference();
  expect(oldOwner.unwrap().project2).toBeUndefined();
  const mock = mockLogger(orm, ['query']);
  await orm.em.flush();

  const queries = mock.mock.calls.map(q => q[0]);

  expect(queries[1]).toMatch('update `user` set `project2_id` = ? where `id` = ?');
  expect(queries[2]).toMatch('insert into `user` (`name`, `project2_id`) values (?, ?)');

  const oldOwner2 = await orm.em.fork().findOne(User, oldOwner.id);
  expect(oldOwner2).not.toBeNull();
});

test('change a 1:1 relation by setting the FK on the new entity', async () => {
  const project = await createProject();
  const oldOwner = project.owner!;
  // the project1 is being set right ahead on the new user instance, which propagates to replacing `Project.owner`
  orm.em.create(User, { name: 'Johnny', project1: 1 });
  expect(oldOwner.unwrap().project1).toBeUndefined();

  const mock = mockLogger(orm, ['query']);
  await orm.em.flush();
  const queries = mock.mock.calls.map(q => q[0]);

  expect(queries[1]).toMatch('delete from `user` where `id` in (?)');
  expect(queries[2]).toMatch('insert into `user` (`name`, `project1_id`) values (?, ?)');

  const oldOwner2 = await orm.em.fork().findOne(User, oldOwner.id);
  expect(oldOwner2).toBeNull();
});

