import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class LdrData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ldr_value: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  timestamp: Date;
}
