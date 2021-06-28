import {
  Entity,
  EntityRepository,
  Enum,
  Filter,
  Index,
  MikroORM,
  PrimaryKey,
  Property,
  QueryOrder,
} from '@mikro-orm/core';
import { PostgreSqlDriver, SchemaGenerator } from '@mikro-orm/postgresql';
import { v4 } from 'uuid';

enum Status {
  OPEN = 'open',
  CLOSED = 'closed',
  MERGED = 'merged',
}

@Entity()
@Filter({
  name: 'closed',
  cond: {
    status: Status.CLOSED,
  },
})
export class PullRequest {

  @PrimaryKey({ type: 'uuid' })
  id = v4();

  @Property()
  title!: string;

  @Index()
  @Property({ columnType: 'timestamp' })
  createdAt = new Date();

  @Enum()
  status: Status = Status.OPEN;

}

describe('GH issue 1979', () => {

  let orm: MikroORM<PostgreSqlDriver>;
  let prRepository: EntityRepository<PullRequest>;

  beforeAll(async () => {
    orm = await MikroORM.init({
      entities: [PullRequest],
      dbName: ':memory:',
      type: 'sqlite',
      debug: true,
    });
    await new SchemaGenerator(orm.em).ensureDatabase();
    await new SchemaGenerator(orm.em).dropSchema();
    await new SchemaGenerator(orm.em).createSchema();
    prRepository = orm.em.getRepository(PullRequest);

    const closed = [...Array(50)].map(() => {
      const pr = new PullRequest();
      pr.title = 'some title';
      pr.status = Status.CLOSED;
      return pr;
    });

    const open = [...Array(30)].map(() => {
      const pr = new PullRequest();
      pr.title = 'some title';
      pr.status = Status.OPEN;
      return pr;
    });

    const merged = [...Array(20)].map(() => {
      const pr = new PullRequest();
      pr.title = 'some title';
      pr.status = Status.MERGED;
      return pr;
    });

    prRepository.persist(closed);
    prRepository.persist(open);
    prRepository.persist(merged);
    await prRepository.flush();
    orm.em.clear();
  });

  afterAll(() => orm.close(true));

  test('reproduction', async () => {
    const [entities, totalCount] = await prRepository.findAndCount(
      {},
      {
        orderBy: { createdAt: QueryOrder.DESC },
        limit: 25,
        offset: 25,
        filters: ['closed'],
      },
    );

    expect(entities.length).toBe(25);
    expect(totalCount).toBe(50);
  });

});
