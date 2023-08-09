import { Exclude } from 'class-transformer';
import {
  Entity,
  Column,
  ObjectId,
  ObjectIdColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('url')
export class UrlEntity {
  @Exclude()
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  urlCode: string;

  @Column()
  longUrl: string;

  @Column()
  shortUrl: string;

  @Exclude()
  @CreateDateColumn({
    type: 'timestamp',
  })
  public createdAt: Date;

  @Exclude()
  @UpdateDateColumn({
    type: 'timestamp',
  })
  public updatedAt: Date;

  constructor(partial: Partial<UrlEntity>) {
    Object.assign(this, partial);
  }
}
