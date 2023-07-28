import { Body, Controller, Get, Post, Query } from '@nestjs/common';
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

  @Post('/registrarReposicion')
  async postReposicion(@Body() reposicionData: any) {
    const fechaReposicionParts = reposicionData.fechaReposicion.split('/');
    const fechaReposicionFormatted = `${fechaReposicionParts[2]}-${fechaReposicionParts[1]}-${fechaReposicionParts[0]}`;
    const nuevaFecha = new Date(fechaReposicionFormatted);

    // Aquí, se espera que reposicionData contenga todos los datos necesarios para insertar una reposición
    const reposicion = await this.reposicionService.insertReposicionDB(
      reposicionData.idDocente,
      reposicionData.idClase,
      reposicionData.tipoTramite,
      reposicionData.conGoseSueldo,
      reposicionData.linkAulaVirtual,
      reposicionData.motivo,
      reposicionData.breveExplicacion,
      nuevaFecha,
      reposicionData.horaInicio,
      reposicionData.horaFin,
    );

    return reposicion.raw.insertId;
  }
}
