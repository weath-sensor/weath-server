import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class TemperatureData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('float')
  temperature: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
