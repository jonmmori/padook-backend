import { UserRole } from './user-role.enum';

export interface UserCriteria {
  id?: string;
  username?: string;
  name?: string;
  email?: string;
  role?: UserRole;
  phone?: string;
}
