// app.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HumidityData } from './humidity.entity';
import { HumidityService } from './humidity.service';
import { HumidityController } from './humidity.controller';

@Module({
  imports: [TypeOrmModule.forFeature([HumidityData])],
  providers: [HumidityService],
  controllers: [HumidityController],
})
export class HumidityModule {}
