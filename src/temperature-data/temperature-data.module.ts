import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TemperatureDataService } from './temperature-data.service';
import { TemperatureDataController } from './temperature-data.controller';
import { TemperatureData } from './temperature-data.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TemperatureData])],
  providers: [TemperatureDataService],
  controllers: [TemperatureDataController],
})
export class TemperatureDataModule {}
