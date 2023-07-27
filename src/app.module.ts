import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReposicionModule } from './reposicion/reposicion.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clase } from './reposicion/entities/clase.entity';
import { Docente } from './reposicion/entities/docentes.entity';
import { Seccion } from './reposicion/entities/secciones.entity';
import { Asignatura } from './reposicion/entities/asignaturas.entity';
import { ReposicionController } from './reposicion/reposicion.controller';
import { ReposicionService } from './reposicion/reposicion.service';
import { Reposiciones } from './reposicion/entities/reposiciones.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'containers-us-west-146.railway.app',
      port: 7491,
      username: 'root',
      password: 'hDPR8aTinNfdLWM5gYr7',
      database: 'usap_sistema',
      entities: [Clase, Docente, Seccion, Asignatura, Reposiciones],
      synchronize: true,
    }),
    ReposicionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
