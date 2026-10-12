import { Hidden, MikroORM } from "@mikro-orm/core";
import {
  Entity,
  PrimaryKey,
  Property,
  ReflectMetadataProvider,
} from "@mikro-orm/decorators/legacy";
import { SqliteDriver } from "@mikro-orm/sqlite";

@Entity()
class Task {
  @PrimaryKey({ hidden: true })
  id!: number & Hidden;

  @Property({ type: "string" })
  description!: string;
}

test(`should create entity`, async () => {
  const orm = await MikroORM.init({
    metadataProvider: ReflectMetadataProvider,
    entities: [Task],
    driver: SqliteDriver,
    dbName: ":memory:",
  });
  await orm.schema.refresh();

  const task = orm.em
    .getRepository(Task)
    .create({ description: "Have to do this task" });
  await expect(orm.em.persist(task).flush()).resolves.not.toThrow();

  await orm.close(true);
});
