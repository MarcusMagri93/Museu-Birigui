import { Injectable } from '@nestjs/common';

@Injectable()
export class UsuarioService {
  listar(): string {
    return 'Paulo Saulo';
  }
}
