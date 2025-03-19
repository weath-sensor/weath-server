import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TemperatureData } from './temperature.entity';
import { TemperatureController } from './temperature.controller';
import { TemperatureService } from './temperature.service';

@Module({
  imports: [TypeOrmModule.forFeature([TemperatureData])],
  controllers: [TemperatureController],
  providers: [TemperatureService],
})
export class TemperatureModule {}
