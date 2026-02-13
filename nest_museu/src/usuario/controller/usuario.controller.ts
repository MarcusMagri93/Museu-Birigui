import { Controller, Get, Param } from '@nestjs/common';
import { UsuarioService } from '../service/usuario.service';

@Controller('/usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get()
  listar(): string {
    return this.usuarioService.listar();
  }

  @Get(':id')
  listarPorId(@Param('id') id: number): string {
    return 'Ola usuario com id: ' + id;
  }
}
