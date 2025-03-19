import { Injectable } from '@nestjs/common';
import * as ds18b20 from 'ds18b20';

@Injectable()
export class TemperatureService {
  private readonly sensorId = '28-xxxx'; // Replace with your sensor ID

  async getTemperature(): Promise<number> {
    return new Promise((resolve, reject) => {
      ds18b20.temperature(this.sensorId, (err, value) => {
        if (err) {
          reject('Error reading temperature');
        } else {
          resolve(value);
        }
      });
    });
  }
}
