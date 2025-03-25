import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: process.env.CORS_ORIGIN,
    methods: 'GET, PUT, POST, DELETE',
    allowedHeaders: 'Content-Type, Accept',
  });

  await app.listen(3000, '0.0.0.0');
}
bootstrap();