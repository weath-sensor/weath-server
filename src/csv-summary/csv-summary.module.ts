// csv-summary/csv-summary.module.ts
import { Module } from '@nestjs/common';
import { CsvSummaryService } from './csv-summary.service';
import { CsvSummaryController } from './csv-summary.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TemperatureData } from '../temperature/temperature.entity';
import { LdrData } from '../ldr-data/ldr-data.entity';
import { Humidity } from '../humidity/humidity.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([TemperatureData, LdrData, Humidity]),
  ],
  providers: [CsvSummaryService],
  controllers: [CsvSummaryController],
})
export class CsvSummaryModule {}
