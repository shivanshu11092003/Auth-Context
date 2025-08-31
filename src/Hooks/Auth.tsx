import { AuthContext } from "@/utils/Context/AuthContext";
import { USER } from "@/utils/types/type";
import { useNavigate, useRouter } from "@tanstack/react-router";
import axios from "axios";
import React, { useCallback, useContext, useEffect, useState } from "react";

const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<USER | null>(null);
  const navigate = useNavigate();
  const router = useRouter();
  const isAuthenticated = !!user;
  const login = useCallback(() => {
    axios({
      method: "POST",
      url: "https:10.21.97.249:8000/core/login/",
      headers: {
        Authorization: `Basic ${btoa("erp" + ":" + "ERP@3@5@5")}`,
      },
      withCredentials: true,
    }).then((res) => {
      console.log(res.data);
      check();
    });
  }, []);

  const check = () => {
    axios<USER>({
      method: "GET",
      url: "https:10.21.97.249:8000/core/login/",
      withCredentials: true,
    }).then((r) => {
      setUser((prv) => (prv = r.data));
      navigate({ to: "/user" });
    });
  };
  const logout = useCallback(() => {
    axios({
      method: "DELETE",
      url: "https:10.21.97.249:8000/core/login/",
      withCredentials: true,
    }).then((r) => {
      setUser((prv) => (prv = null));
      navigate({ to: "/" });
    });
  }, []);
  useEffect(() => {
    check();
  }, []);
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
