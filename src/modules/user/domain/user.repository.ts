import { User } from './user.entity';

export interface UserRepository {
  findById(id: string): Promise<User | null>;
  findByCriteria(criteria: Partial<User>): Promise<User[]>;
  save(user: User): Promise<User>;
  update(user: User): Promise<User>;
}
