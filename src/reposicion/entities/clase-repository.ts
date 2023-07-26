/* eslint-disable prettier/prettier */
// clase.repository.ts
import { EntityRepository, Repository } from 'typeorm';
import { Clase } from './clase.entity';

@EntityRepository(Clase)
export class ClaseRepository extends Repository<Clase> {
  // Aquí puedes definir métodos personalizados para el repositorio si es necesario
}
