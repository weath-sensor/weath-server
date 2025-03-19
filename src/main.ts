import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for your frontend domain (public IP of your VPS)
  app.enableCors({
    origin: 'http://51.222.111.230:5173',  // Replace with the public IP and port where your frontend is running
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',  // Allowed HTTP methods
    allowedHeaders: 'Content-Type, Accept',  // Allowed headers
  });

  await app.listen(3000, '0.0.0.0');  // Port where your API server runs
}
bootstrap();
// SAMPLE TEST