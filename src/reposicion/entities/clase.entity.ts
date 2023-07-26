/* eslint-disable prettier/prettier */
// clase.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Docente } from './docentes.entity';
import { Asignatura } from './asignaturas.entity';
import { Seccion } from './secciones.entity';

@Entity({ name: 'clases' }) // Especificamos el nombre de la tabla en la base de datos
export class Clase {
  @PrimaryGeneratedColumn({ name: 'id_clase' })
  id: number;

  @Column({ name: 'codigo_clase' })
  codigoClase: string;

  @ManyToOne(() => Asignatura, asignatura => asignatura.idAsignatura)
  @JoinColumn({ name: 'id_asignatura' })
  asignatura: Asignatura;

  @Column()
  grupo: string;

  @ManyToOne(() => Seccion, seccion => seccion.idSeccion)
  @JoinColumn({ name: 'id_seccion' })
  seccion: Seccion;

  @Column()
  uv: number;

  @Column()
  uvp: number;

  @ManyToOne(() => Docente, docente => docente.idDocente)
  @JoinColumn({ name: 'id_docente' })
  docente: Docente;

  @Column()
  aula: string;

  @Column({ name: 'inicio_clase' })
  inicioClase: string;

  @Column({ name: 'fin_clase' })
  finClase: string;

  @Column()
  dias: string;

  @Column()
  jornada: string;

  @Column()
  capacidad: number;

  @Column()
  cupos: number;

  @Column()
  matriculados: number;

  @Column()
  preMatriculados: number;

  @Column({ name: 'acepta_le' })
  aceptaLE: boolean;

  @Column({ name: 'lista_espera' })
  listaEspera: number;
}
