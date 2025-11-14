import * as SecureStore from "expo-secure-store";

const TOKEN_KEY = "voxia_token";

export async function saveToken(token: string) {
  try {
    await SecureStore.setItemAsync(TOKEN_KEY, token);
  } catch (e) {
    console.warn("Erro ao salvar token:", e);
  }
}

export async function getToken(): Promise<string | null> {
  try {
    return await SecureStore.getItemAsync(TOKEN_KEY);
  } catch (e) {
    console.warn("Erro ao ler token:", e);
    return null;
  }
}

export async function removeToken() {
  try {
    await SecureStore.deleteItemAsync(TOKEN_KEY);
  } catch (e) {
    console.warn("Erro ao remover token:", e);
  }
}
