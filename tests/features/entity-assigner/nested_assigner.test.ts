import {
  Collection,
  Entity,
  IdentifiedReference,
  ManyToOne,
  MikroORM,
  OneToMany, PrimaryKey,
  Property
} from '@mikro-orm/core';
import type { SqliteDriver } from '@mikro-orm/sqlite';
import { mockLogger } from '../../helpers';

@Entity()
export class Project {

  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  @OneToMany(() => Filter, filters => filters.project, {
    eager: true,
    orphanRemoval: true,
  })
  public filters = new Collection<Filter>(this);

}

@Entity()
export class Filter {

  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @ManyToOne(() => Project, {
    serializer: p => p.id,
    wrappedReference: true,
    onDelete: 'cascade',
  })
  public project!: IdentifiedReference<Project>;

}


describe('nested assign', () => {

  let orm: MikroORM<SqliteDriver>;

  beforeAll(async () => {
    process.env.NO_COLOR = '1';
    orm = await MikroORM.init({
      entities: [Project, Filter],
      dbName: ':memory:',
      type: 'sqlite',

    });
    await orm.schema.createSchema();

    orm.em.create(Project, {
      name: 'project name',
      filters: [{
        name: 'fase',
      }],
    });

    orm.em.create(Project, {
      name: 'project 2 name',
      filters: [{
        name: 'workers',
      }],
    });

    await orm.em.flush();
    orm.em.clear();
  });

  afterAll(async () => {
    await orm.close(true);
  });

  test('should update m:n relations', async () => {
    const project = await orm.em.findOneOrFail(Project, 1);

    // data incoming from for example a put request
    // could contain ids from entities belonging to our project
    // but could also contain ids from entities belonging to other projects
    const data = {
      ...project,
      filters: [{
        id: 1,
        name: 'Begin',
      },{
        id: 2, // id belongs to project 2, so we should not use this
        name: 'workers',
      }],
    };

    orm.em.assign(project, data);

    const mock = mockLogger(orm, ['query']);
    try {
      await orm.em.flush();
    } catch (e) {
      console.log(e);
    }

    const queries: string[] = mock.mock.calls.map(c => c[0]);
    await orm.em.refresh(project);
    expect(project.filters.getItems()[0].id).toBe(1); // we updated the first item
    expect(project.filters.getItems()[1].id).toBe(3); // the second item had no matching id, since id: 2 already existed, so we created a new item which should then get id: 3
  });
});
