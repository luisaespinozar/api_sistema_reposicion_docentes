import { Test, TestingModule } from '@nestjs/testing';
import { EnvioCorreoController } from './envio-correo.controller';
import { EnvioCorreoService } from './envio-correo.service';

describe('EnvioCorreoController', () => {
  let controller: EnvioCorreoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnvioCorreoController],
      providers: [EnvioCorreoService],
    }).compile();

    controller = module.get<EnvioCorreoController>(EnvioCorreoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
