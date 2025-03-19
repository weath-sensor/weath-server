import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TemperatureData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  temperature: number;  // Temperature value

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;  // Timestamp when the data was created
}
