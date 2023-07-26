/* eslint-disable prettier/prettier */
// seccion.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'secciones' }) // Especificamos el nombre de la tabla en la base de datos
export class Seccion {
  @PrimaryGeneratedColumn({ name: 'id_seccion' })
  idSeccion: number;

  @Column()
  seccion: string;
}
