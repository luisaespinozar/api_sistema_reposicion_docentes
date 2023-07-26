/* eslint-disable prettier/prettier */
// docente.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'docentes' }) // Especificamos el nombre de la tabla en la base de datos
export class Docente {
  @PrimaryGeneratedColumn({ name: 'id_docente' })
  idDocente: number;

  @Column({ name: 'cuenta_catedratico' })
  cuentaCatedratico: string;

  @Column()
  nombres: string;

  @Column()
  apellidos: string;

  @Column({ type: 'boolean', default: true })
  estatus: boolean;
}
