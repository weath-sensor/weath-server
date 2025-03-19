import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TemperatureDataController } from './temperature-data.controller';
import { TemperatureDataService } from './temperature-data.service';
import { TemperatureData } from './temperature-data.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TemperatureData])], // Register the repository
  controllers: [TemperatureDataController],
  providers: [TemperatureDataService],
})
export class TemperatureDataModule {}
