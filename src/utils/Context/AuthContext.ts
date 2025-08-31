import { createContext } from "react";
import { USER } from "../types/type";

type AuthContextType = {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  user: USER | null;
};
export const AuthContext = createContext<AuthContextType | null>(null);
