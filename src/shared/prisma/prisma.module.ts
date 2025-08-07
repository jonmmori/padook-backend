import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService], // ¡exporta para poder usar en otros módulos!
})
export class PrismaModule {}
