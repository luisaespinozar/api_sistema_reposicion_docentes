import { Module } from '@nestjs/common';
import { EnvioCorreoService } from './envio-correo.service';
import { EnvioCorreoController } from './envio-correo.controller';

@Module({
  controllers: [EnvioCorreoController],
  providers: [EnvioCorreoService],
})
export class EnvioCorreoModule {}
