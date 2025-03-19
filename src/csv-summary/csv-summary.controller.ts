// csv-summary/csv-summary.controller.ts
import { Controller, Get } from '@nestjs/common';
import { CsvSummaryService } from './csv-summary.service';

@Controller('csv-summary')
export class CsvSummaryController {
  constructor(private readonly csvSummaryService: CsvSummaryService) {}

  @Get()
  async generateCsv() {
    return await this.csvSummaryService.generateCsvSummary();
  }
}
