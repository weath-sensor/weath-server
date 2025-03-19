// humidity.entity.ts

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class HumidityData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  humidity_value: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  timestamp: Date;
}
