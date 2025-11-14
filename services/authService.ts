// services/authService.ts
import api from "./api";
import { saveToken } from "../storage/tokenStorage";

type RegisterPayload = {
  email: string;
  senha: string;
  confirmarSenha: string;
};

type LoginPayload = {
  email: string;
  senha: string;
};

export async function registerUser(data: RegisterPayload) {
 
  const res = await api.post("/api/Auth/register", data);
 
  return res;
}

export async function loginUser(data: LoginPayload) {
  
  const res = await api.post("/api/Auth/login", data);


  const token = res.data?.token;
  if (!token) {
    throw new Error("Token não retornado pela API.");
  }

  
  await saveToken(token);

  return res.data;
}
