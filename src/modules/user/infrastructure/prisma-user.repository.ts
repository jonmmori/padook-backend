import { PrismaService } from 'src/shared/prisma/prisma.service';
import { UserRepository } from '../domain/user.repository';
import { User } from '../domain/user.entity';
import { User as PrismaUser } from '@prisma/client';

export class PrismaUserRepository implements UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    return user ? this.toDomain(user) : null;
  }

  private toDomain(user: PrismaUser): User {
    return new User(
      user.id,
      user.username,
      user.name,
      user.email,
      user.password,
      user.role as UserRole,
      user.phone,
      user.createdAt,
      user.updatedAt,
    );
  }
}
