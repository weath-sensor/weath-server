import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LdrDataModule } from './ldr-data/ldr-data.module';
import { TemperatureModule } from './temperature/temperature.module';
import { TemperatureData } from './temperature/temperature.entity';
import { LdrData } from './ldr-data/ldr-data.entity';
import { Humidity } from './humidity/humidity.entity';
import { HumidityModule } from './humidity/humidity.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST, 
      port: 3306,  
      username: process.env.DB_USERNAME, 
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE, 
      entities: [TemperatureData, LdrData, Humidity],
      synchronize: true,
    }),
    
    LdrDataModule,
    TemperatureModule,
    HumidityModule,
  ]
})
export class AppModule {}
