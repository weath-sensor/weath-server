import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LdrDataModule } from './ldr-data/ldr-data.module';
import { TemperatureModule } from './temperature/temperature.module';
import { TemperatureData } from './temperature/temperature.entity';
import { LdrData } from './ldr-data/ldr-data.entity';
import { Humidity } from './humidity/humidity.entity';
import { HumidityModule } from './humidity/humidity.module';
import { CsvSummaryModule } from './csv-summary/csv-summary.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'csv'), // Path where the CSV file is stored
      serveRoot: '/csv-summary', // URL path the client will use
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost', 
      port: parseInt(process.env.DB_PORT || '3306'),  
      username: process.env.DB_USERNAME || 'user', 
      password: process.env.DB_PASSWORD || 'userpassword',
      database: process.env.DB_DATABASE || 'weather_db', 
      entities: [TemperatureData, LdrData, Humidity],
      synchronize: true,
    }),
    
    LdrDataModule,
    TemperatureModule,
    HumidityModule,
    CsvSummaryModule,
  ]
})
export class AppModule {}
