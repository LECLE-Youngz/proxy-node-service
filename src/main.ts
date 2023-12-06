import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from "@nestjs/common";
import * as dotenv from "dotenv";
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const port = process.env.PORT || 5000;
  await app.listen(port);
  Logger.log(`🚀 Listening HTTP at http://0.0.0.0:${port}`, "HTTP");
}
bootstrap();
