import { Module } from '@nestjs/common';
import { TemperatureService } from './temperature.service';
import { TemperatureController } from './temperature.controller';

@Module({
  imports: [],
  controllers: [TemperatureController],
  providers: [TemperatureService],
})
export class TemperatureModule {}
