import { Column, Entity, PrimaryColumn } from 'typeorm';
import { BaseEntity } from '@nx-pnpm-monorepo/common';

@Entity()
export class UserEntity extends BaseEntity {
  @PrimaryColumn({ type: 'binary', length: 16 })
  id: Buffer;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ type: 'datetime', precision: 6, nullable: true })
  lockedAt: Date | null;
}
