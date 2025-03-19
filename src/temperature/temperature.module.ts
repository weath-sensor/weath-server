import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TemperatureData } from './temperature.entity';
import { TemperatureService } from './temperature.service';
import { TemperatureController } from './temperature.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TemperatureData])],
  providers: [TemperatureService],
  controllers: [TemperatureController],
})
export class TemperatureModule {}
