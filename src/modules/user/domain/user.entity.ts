import { UserRole } from './user-role.enum';

export class User {
  constructor(
    public readonly id: string,
    public username: string,
    public name: string,
    public email: string,
    public password: string,
    public role: UserRole,
    public phone?: string,
    public readonly createdAt?: Date,
    public updatedAt?: Date,
  ) {}
}
