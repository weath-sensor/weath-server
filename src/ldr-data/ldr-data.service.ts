import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LdrData } from './ldr-data.entity';

@Injectable()
export class LdrDataService {
  constructor(
    @InjectRepository(LdrData)
    private ldrDataRepository: Repository<LdrData>,
  ) {};

  async createLdrData(ldrValue: number): Promise<LdrData> {
    const newLdrData = this.ldrDataRepository.create({ ldr_value: ldrValue })
    return this.ldrDataRepository.save(newLdrData)
  };

  async getAllLdrData(): Promise<LdrData[]> { 
    return this.ldrDataRepository.find() 
  };
}
