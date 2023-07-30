import { Test, TestingModule } from '@nestjs/testing';
import { EnvioCorreoService } from './envio-correo.service';

describe('EnvioCorreoService', () => {
  let service: EnvioCorreoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnvioCorreoService],
    }).compile();

    service = module.get<EnvioCorreoService>(EnvioCorreoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
