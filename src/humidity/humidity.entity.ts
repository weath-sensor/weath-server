import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Humidity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'float' })
  humidity_value: number;

  @CreateDateColumn()
  timestamp: Date;
}
