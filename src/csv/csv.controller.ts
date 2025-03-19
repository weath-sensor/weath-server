import { Controller, Get, Param, Res } from '@nestjs/common';
import { CsvService } from './csv.service';
import { Response } from 'express';

@Controller('csv')
export class CsvController {
  constructor(private readonly csvService: CsvService) {}

  @Get(':type')
  async downloadCsv(@Param('type') type: string, @Res() res: Response) {
    try {
      const csv = await this.csvService.generateCsv(type);
      res.header('Content-Type', 'text/csv');
      res.attachment(`${type}-data.csv`);
      res.send(csv);
    } catch (error) {
      res.status(500).send('Error generating CSV');
    }
  }
}
