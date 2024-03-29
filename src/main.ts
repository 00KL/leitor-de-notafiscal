import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import multiPart from '@fastify/multipart';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true }),
  );
  app.register(multiPart);
  await app.listen(3000);
}
bootstrap();
