import {User} from '../data/models/domain/user';

export type BaseState<T> = {
  message: string;
  error: boolean;
  loading: boolean;
  data?: T;
};

export type RejectState = {
  rejectValue: {
    status: number;
    message: string;
    networkError: boolean;
    msg?: string;
  };
};

export type AuthState = {
  user: User | null;
  loading: boolean;
  error: string;
  isAuthenticated: boolean;
};
