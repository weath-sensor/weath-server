import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TemperatureData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'float' })
  temperature: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  timestamp: Date;
}
