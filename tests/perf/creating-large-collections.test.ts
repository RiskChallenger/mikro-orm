import { Collection, Entity, ManyToOne, MikroORM, OneToMany, PrimaryKey, Property } from '@mikro-orm/core';
import type { BetterSqliteDriver } from '@mikro-orm/better-sqlite';
import { performance } from 'perf_hooks';

@Entity()
class TestRunEntity {

  @PrimaryKey()
  id!: number;

  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  @OneToMany(() => TestCaseEntity, e => e.testRun)
  cases = new Collection<TestCaseEntity>(this);

}

@Entity()
class TestCaseEntity {

  @PrimaryKey()
  id!: number;

  @Property()
  title!: string;

  @ManyToOne(() => TestRunEntity)
  testRun!: TestRunEntity;

}

let orm: MikroORM<BetterSqliteDriver>;

beforeAll(async () => {
  orm = await MikroORM.init({
    entities: [TestCaseEntity],
    dbName: ':memory:',
    type: 'better-sqlite',
  });
  await orm.schema.createSchema();
});

afterAll(() => orm.close(true));

// should run around 50-100ms
test('perf: create large 1:m collection', async () => {
  console.time('perf: create large 1:m collection (10k entities)');
  const start = performance.now();
  const entity = orm.em.create(TestRunEntity, {
    cases: Array(10_000).fill(undefined).map((_, index) => ({
      title: `Test Case #${index}`,
    })),
  });
  const end = performance.now();
  console.timeEnd('perf: create large 1:m collection (10k entities)');
  expect(end - start).toBeLessThan(100);
});
