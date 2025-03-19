import { Controller, Get, Res } from '@nestjs/common';
import { CsvSummaryService } from './csv-summary.service';
import { Response } from 'express';

@Controller('csv-summary')
export class CsvSummaryController {
  constructor(private readonly csvSummaryService: CsvSummaryService) {}

  @Get()
  async generateCsv(@Res() res: Response) {
    const csvContent = await this.csvSummaryService.generateCsvSummary();

    // Set the response headers to indicate a CSV file download
    res.header('Content-Type', 'text/csv');
    res.header('Content-Disposition', 'attachment; filename=csv-summary.csv');
    res.send(csvContent);
  }
}
