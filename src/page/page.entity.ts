import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class Page {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  path: string;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  content: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
