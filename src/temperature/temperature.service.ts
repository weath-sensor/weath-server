import { Injectable } from '@nestjs/common';

@Injectable()
export class TemperatureService {
  // Store received temperature data, or process it as required
  private temperature: number = 0;

  // Store the received temperature
  setTemperature(temperature: number): void {
    this.temperature = temperature;
  }

  // Retrieve the latest temperature value
  getTemperature(): number {
    return this.temperature;
  }
}
