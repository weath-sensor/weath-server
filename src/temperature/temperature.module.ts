import { Module } from '@nestjs/common';
import { TemperatureController } from './temperature.controller';
import { TemperatureService } from './temperature.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TemperatureData } from './temperature.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TemperatureData])],
  controllers: [TemperatureController],
  providers: [TemperatureService],
})
export class TemperatureModule {}
