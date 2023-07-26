import { Test, TestingModule } from '@nestjs/testing';
import { ReposicionService } from './reposicion.service';

describe('ReposicionService', () => {
  let service: ReposicionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReposicionService],
    }).compile();

    service = module.get<ReposicionService>(ReposicionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
