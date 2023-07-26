import { PartialType } from '@nestjs/mapped-types';
import { CreateReposicionDto } from './create-reposicion.dto';

export class UpdateReposicionDto extends PartialType(CreateReposicionDto) {}
