import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Humidity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'float' })
  humidity_value: number;  // The humidity value from the sensor

  @CreateDateColumn()
  timestamp: Date; // Automatically generated timestamp for when the data was saved
}
