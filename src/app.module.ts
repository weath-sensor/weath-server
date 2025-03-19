import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LdrDataModule } from './ldr-data/ldr-data.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost', 
      port: parseInt(process.env.DB_PORT || '3306'),  
      username: process.env.DB_USERNAME || 'root', 
      password: process.env.DB_PASSWORD || 'password',  
      database: process.env.DB_DATABASE || 'weather_db', 
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    LdrDataModule,
  ],
})
export class AppModule {}