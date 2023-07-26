/* eslint-disable prettier/prettier */
// asignatura.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'asignaturas' }) // Especificamos el nombre de la tabla en la base de datos
export class Asignatura {
  @PrimaryGeneratedColumn({ name: 'id_asignatura' })
  idAsignatura: number;

  @Column()
  asignatura: string;
}
