import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LdrData } from './ldr-data.entity';
import { LdrDataService } from './ldr-data.service';
import { LdrDataController } from './ldr-data.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LdrData])],
  providers: [LdrDataService],
  controllers: [LdrDataController],
})
export class LdrDataModule {}
