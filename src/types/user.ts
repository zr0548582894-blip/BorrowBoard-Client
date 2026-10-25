import type { DateTimeString } from './common';
export type Role = 'USER' | 'ADMIN'|'GUEST';

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  city: string | null;
  role: Role;
  isBlocked: boolean;
  createdAt: DateTimeString;
  productCount: number;
}

export interface PublicUser {
  id: number;
  name: string;
  city: string | null;
}

export interface ContactUser extends PublicUser {
  phone: string | null;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface RegisterInput {
  name: string;
  email: string;
  password: string;
  phone: string;
  city?: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface UpdateMeInput {
  name?: string;
  phone?: string;
  city?: string | null;
}

export type UserContextType = {
  user: User | null;
  isLoggedIn:boolean,
  login:(user:User)=>void,
  logout:()=>void
};