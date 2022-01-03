import {AfterUpdate, Collection, Entity, EventArgs, OneToMany, PrimaryKey, Property} from '@mikro-orm/core';
import { House } from './house.entity';

@Entity()
export class Project {

  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @Property()
  owner!: string;

  @Property()
  worth!: number;

  @OneToMany(() => House, house => house.project)
  houses = new Collection<House>(this);

  @Property()
  createdAt: Date = new Date();

  @Property()
  updatedAt: Date = new Date();

  @AfterUpdate()
  afterUpdate(args: EventArgs<House>) {
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    const somethingAsync = async () => {
      console.log('async 0');
      await delay(1000);
      return 0;
    };
    if (args.changeSet?.payload.sth) {
      return somethingAsync();
    }
  }

}
