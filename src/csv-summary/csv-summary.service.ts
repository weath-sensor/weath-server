import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import * as fs from 'fs';
import * as path from 'path';
import { TemperatureData } from '../temperature/temperature.entity';
import { LdrData } from '../ldr-data/ldr-data.entity';
import { Humidity } from '../humidity/humidity.entity';

@Injectable()
export class CsvSummaryService {
  constructor(
    @InjectEntityManager()
    private readonly entityManager: EntityManager,
  ) {}

  async generateCsvSummary(): Promise<string> {
    // Fetch data directly from the database
    const temperatureData = await this.entityManager.find(TemperatureData);
    const ldrData = await this.entityManager.find(LdrData);
    const humidityData = await this.entityManager.find(Humidity);

    const header = 'Temperature, LDR, Humidity\n';
    
    // Make sure all data arrays are of equal length, or handle accordingly
    const rows = temperatureData.map((temp, index) => {
      const ldrValue = ldrData[index]?.value ?? 'N/A'; // Handle missing LDR values
      const humidityValue = humidityData[index]?.value ?? 'N/A'; // Handle missing Humidity values
      return `${temp.value}, ${ldrValue}, ${humidityValue}\n`;
    });

    const csvContent = header + rows.join('');
    const filePath = path.resolve(__dirname, '../../csv-summary.csv');

    // Write the CSV to file
    fs.writeFileSync(filePath, csvContent, 'utf8');

    return `CSV summary generated at: ${filePath}`;
  }
}
