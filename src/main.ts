import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for your frontend domain
  app.enableCors({
    origin: 'http://localhost:5173',  // Allow requests from your frontend (change as needed)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',  // Allowed HTTP methods
    allowedHeaders: 'Content-Type, Accept',  // Allowed headers
  });

  await app.listen(3000, '0.0.0.0');  // Port where your server runs
}
bootstrap();
