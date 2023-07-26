import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Asignatura } from './entities/asignaturas.entity';
import { Clase } from './entities/clase.entity';
import { Docente } from './entities/docentes.entity';
import { Seccion } from './entities/secciones.entity';

@Injectable()
export class ReposicionService {
  constructor(
    @InjectRepository(Clase)
    private claseRepository: Repository<Clase>,
    @InjectRepository(Docente)
    private docenteRepository: Repository<Docente>,
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
}
