import { Controller, Get } from '@nestjs/common';
import { CsvSummaryService } from './csv-summary.service';

@Controller('csv-summary')
export class CsvSummaryController {
  constructor(private readonly csvSummaryService: CsvSummaryService) {}

  @Get()
  async generateCsv() {
    const csvContent = await this.csvSummaryService.generateCsvSummary();
    
    // Send the CSV content as a response
    return { csvContent };
  }
}
