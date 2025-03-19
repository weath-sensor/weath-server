import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class TemperatureData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('float')
  temperature: number;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  timestamp: Date;
}
