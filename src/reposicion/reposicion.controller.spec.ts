import { Test, TestingModule } from '@nestjs/testing';
import { ReposicionController } from './reposicion.controller';
import { ReposicionService } from './reposicion.service';

describe('ReposicionController', () => {
  let controller: ReposicionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReposicionController],
      providers: [ReposicionService],
    }).compile();

    controller = module.get<ReposicionController>(ReposicionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
