import { NestFactory } from '@nestjs/core';
import { RickAndMortyModule } from './rick-and-morty.module';

async function bootstrap() {
  const app = await NestFactory.create(RickAndMortyModule);
  app.enableCors();
  await app.listen(5000);
}
bootstrap();
