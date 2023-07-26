import { Module } from '@nestjs/common';
import { ReposicionService } from './reposicion.service';
import { ReposicionController } from './reposicion.controller';
import { Clase } from './entities/clase.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Docente } from './entities/docentes.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Clase, Docente]), // Asegúrate de agregar ClaseRepository aquí
  ],
  controllers: [ReposicionController],
  providers: [ReposicionService],
})
export class ReposicionModule {}
