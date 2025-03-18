import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LdrDataModule } from './ldr-data/ldr-data.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',  // Fallback to localhost if DB_HOST is undefined
      port: parseInt(process.env.DB_PORT || '3306'),  // Fallback to 3306 if DB_PORT is undefined
      username: process.env.DB_USERNAME || 'root',  // Default user
      password: process.env.DB_PASSWORD || 'password',  // Default password
      database: process.env.DB_DATABASE || 'weather_db',  // Default database
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    LdrDataModule,
  ],
})
export class AppModule {}
