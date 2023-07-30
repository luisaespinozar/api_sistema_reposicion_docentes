import { Injectable, InternalServerErrorException } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EnvioCorreoService {
  async enviarEMail(
    destinatarios: string[],
    asunto: string,
    cuerpo: string,
    // listaArchivosAdjuntos: ArchivosAdjuntos[],
  ) {
    try {
      const configuracionCorreo = {
        smtp_server: 'smtp.gmail.com',
        smtp_server_port: 587,
        email: '3190178@usap.edu',
        password: 'dvkxqmfvzpqhxgbq',
      };
      /*----  CONDIGURA EL NODE MAILER TRANSPORT CON LOS DATOS OBTENIDOS DE LA CONF DEL CORREO EMISOR */
      const transporte = nodemailer.createTransport({
        host: configuracionCorreo.smtp_server,
        port: configuracionCorreo.smtp_server_port,
        secure: false,
        requireTLS: true,
        logger: true,
        debug: false,
        auth: {
          user: configuracionCorreo.email,
          pass: configuracionCorreo.password,
        },
      });

      const archivosAdjuntos = [];

      //   listaArchivosAdjuntos.forEach((item: ArchivosAdjuntos) => {
      //     archivosAdjuntos.push({
      //       filename: item.filename,
      //     });
      //   });

      /*---- SE CONSTRUYE EL CUERPO/ENCABEZADO DEL MENSAJE */
      const mailOptions = {
        from: `"GRUPO #3" <${configuracionCorreo.email}>`,
        to: destinatarios,
        subject: asunto,
        text: cuerpo,
        // attachments: archivosAdjuntos,
      };

      transporte.sendMail(mailOptions);

      return true;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(error.message);
    }
  }
}

export interface ArchivosAdjuntos {
  filename: string;
}
