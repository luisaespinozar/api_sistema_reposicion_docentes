/* eslint-disable prettier/prettier */
// clase.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Docente } from './docentes.entity';
import { Clase } from './clase.entity';

@Entity({ name: 'reposiciones' }) // Especificamos el nombre de la tabla en la base de datos
export class Reposiciones {
  @PrimaryGeneratedColumn({ name: 'id_reposicion' })
  id: number;

  @ManyToOne(() => Docente, docente => docente.idDocente)
  id_docente: number;

  @ManyToOne(() => Clase, clase => clase.id)
  id_clase: number;

  @Column({ name: 'tipo_tramite' })
  tipo_tramite: string;
  
  @Column({ name: 'con_gose_sueldo' })
  con_gose_sueldo: number;
  
  @Column({ name: 'link_aula_virtual' })
  link_aula_virtual: string;

  @Column({ name: 'motivo' })
  motivo: string;

  @Column({ name: 'breve_explicacion' })
  breve_explicacion: string;

  @Column({ name: 'fecha_reposicion' })
  fecha_reposicion: Date;

  @Column({ name: 'hora_inicio' })
  hora_inicio: string;

  @Column({ name: 'hora_fin' })
  hora_fin: string;

}
