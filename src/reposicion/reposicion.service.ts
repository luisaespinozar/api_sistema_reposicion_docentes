/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Clase } from './entities/clase.entity';
import { Docente } from './entities/docentes.entity';
import { Reposiciones } from './entities/reposiciones.entity';

@Injectable()
export class ReposicionService {
  constructor(
    @InjectRepository(Clase)
    private claseRepository: Repository<Clase>,
    @InjectRepository(Docente)
    private repoRepository: Repository<Reposiciones>,
  ) {}

  // async findAllDocentes(): Promise<Clase[]> {
  //   return this.claseRepository.find();
  // }
  async getInfoClases(cuentaCatedratico: string): Promise<any[]> {
    return this.claseRepository
      .createQueryBuilder('cl')
      .select([
        'doce.cuentaCatedratico',
        'doce.nombres',
        'doce.apellidos',
        'asig.asignatura',
        'sec.seccion',
        'CASE WHEN doce.estatus = 1 THEN "ACTIVO" ELSE "INACTIVO" END AS estatus',
        'cl.*',
      ])
      .innerJoin('cl.docente', 'doce')
      .innerJoin('cl.asignatura', 'asig')
      .innerJoin('cl.seccion', 'sec')
      .where('doce.cuentaCatedratico = :cuentaCatedratico', {
        cuentaCatedratico,
      })
      .getRawMany();
  }

  async insertReposicionDB(
    idDocente: number,
    idClase: number,
    tipoTramite: string,
    conGoseSueldo: number,
    linkAulaVirtual: string,
    motivo: string,
    breveExplicacion: string,
    fechaReposicion: Date,
    horaInicio: string,
    horaFin: string,
  ): Promise<any> {
    return this.repoRepository
      .createQueryBuilder('repo')
      .insert()
      .into(Reposiciones)
      .values([
        {
          id_docente: idDocente,
          id_clase: idClase,
          tipo_tramite: tipoTramite,
          con_gose_sueldo: conGoseSueldo,
          link_aula_virtual: linkAulaVirtual,
          motivo: motivo,
          breve_explicacion: breveExplicacion,
          fecha_reposicion: fechaReposicion,
          hora_inicio: horaInicio,
          hora_fin: horaFin,
        } as unknown as Partial<Reposiciones>,
      ])
      .execute();
  }
}
