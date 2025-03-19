import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LdrData } from '../ldr-data/ldr-data.entity';
import { TemperatureData } from '../temperature/temperature.entity';
import { Humidity } from '../humidity/humidity.entity';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class CsvSummaryService {
  constructor(
    @InjectRepository(LdrData)
    private readonly ldrDataRepository: Repository<LdrData>,
    @InjectRepository(TemperatureData)
    private readonly temperatureDataRepository: Repository<TemperatureData>,
    @InjectRepository(Humidity)
    private readonly humidityRepository: Repository<Humidity>,
  ) {}

  async generateCsvSummary(): Promise<string> {
    // Fetch the last 100 records from each sensor
    const temperatureData = await this.temperatureDataRepository.find({
      take: 100,
      order: { timestamp: 'DESC' },
    });
    const ldrData = await this.ldrDataRepository.find({
      take: 100,
      order: { timestamp: 'DESC' },
    });
    const humidityData = await this.humidityRepository.find({
      take: 100,
      order: { timestamp: 'DESC' },
    });

    // Ensure the data arrays are of the same length for pairing
    const maxLength = Math.min(temperatureData.length, ldrData.length, humidityData.length);

    // Define rows explicitly as string array
    const rows: string[] = [];
    const header = 'Timestamp, Temperature (°C), LDR Value, Humidity (%)\n';
    
    for (let i = 0; i < maxLength; i++) {
      const timestamp = new Date(temperatureData[i].timestamp);
      const formattedTimestamp = `${timestamp.getFullYear()}-${(timestamp.getMonth() + 1).toString().padStart(2, '0')}-${timestamp.getDate().toString().padStart(2, '0')} ${timestamp.getHours().toString().padStart(2, '0')}:${timestamp.getMinutes().toString().padStart(2, '0')}:${timestamp.getSeconds().toString().padStart(2, '0')}`;
      rows.push(`${formattedTimestamp}, ${temperatureData[i].temperature}, ${ldrData[i]?.ldr_value}, ${humidityData[i]?.humidity_value}`);
    }

    const csvContent = header + rows.join('\n');

    // Save the CSV to a file
    const filePath = path.resolve(__dirname, '../../csv-summary.csv');
    fs.writeFileSync(filePath, csvContent, 'utf8');

    return `CSV summary generated at: ${filePath}`;
  }
}
