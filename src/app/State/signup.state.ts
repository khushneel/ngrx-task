import { User } from "./user.model";

export interface SignupState {
    data: any;
    user: User;
    error: string | null;
    success: string | null;
  }
  
  export const initialSignupState: SignupState = {
    data: null,
    user: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: ''
    },  
    error: null,
    success: null
  };
  
