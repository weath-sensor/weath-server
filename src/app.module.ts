import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LdrDataModule } from './ldr-data/ldr-data.module';
import { TemperatureModule } from './temperature/temperature.module';
import { TemperatureData } from './temperature/temperature.entity';
import { LdrData } from './ldr-data/ldr-data.entity';
import { HumidityData } from './humidity/humidity.entity';
import { HumidityModule } from './humidity/humidity.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost', 
      port: parseInt(process.env.DB_PORT || '3306'),  
      username: process.env.DB_USERNAME || 'user', 
      password: process.env.DB_PASSWORD || 'userpassword',
      database: process.env.DB_DATABASE || 'weather_db', 
      entities: [TemperatureData, LdrData, HumidityData],
      synchronize: true,
    }),
    LdrDataModule,
    TemperatureModule,
    HumidityModule
  ],
})
export class AppModule {}
