import { Controller, Get, Param, Query } from '@nestjs/common';
import { ReposicionService } from './reposicion.service';

@Controller('reposiciones')
export class ReposicionController {
  constructor(private readonly reposicionService: ReposicionService) {}

  @Get('/info-clases')
  async getInfoClases(@Query('cuentaCatedratico') cuentaCatedratico: string) {
    const clasesInfo = await this.reposicionService.getInfoClases(
      cuentaCatedratico,
    );

    return clasesInfo;
  }
}
