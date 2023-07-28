import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Configurar el middleware de CORS
  app.enableCors({
    origin: '*', // Reemplaza esto con el dominio que necesitas permitir
    methods: 'GET, POST, PATCH, DELETE', // Puedes especificar los métodos que deseas permitir aquí, en este caso solo POST
  });
  await app.listen(3000);
}
bootstrap();
