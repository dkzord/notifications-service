import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const appPort = process.env.PORT || 3050;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(appPort, () => {
    console.log(`Server running on port http://localhost:${appPort}`);
  });
}
bootstrap();
