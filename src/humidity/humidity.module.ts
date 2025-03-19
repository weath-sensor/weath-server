import { Module } from '@nestjs/common';
import { HumidityService } from './humidity.service';
import { HumidityController } from './humidity.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Humidity } from './humidity.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Humidity])],
  controllers: [HumidityController],
  providers: [HumidityService],
})
export class HumidityModule {}
