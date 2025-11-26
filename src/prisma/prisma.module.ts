import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
@Global() // Pero no es recomendable global module para evitar importarlo en cada módulo que lo use
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // 👈 permite usar PrismaService en otros módulos
})
export class PrismaModule {}
