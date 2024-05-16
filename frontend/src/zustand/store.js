import create from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(persist((set) => ({
  isAuthenticated: false,
  user: null,
  login: (username, password) => {
    // You can perform authentication logic here, like calling an API
    // For simplicity, I'll just assume successful authentication
    set({ isAuthenticated: true, user: { username } });
  },
  logout: () => {
    set({ isAuthenticated: false, user: null });
  },
}), {
  name: 'auth-storage', // optional: name for local storage
  getStorage: () => localStorage // optional: specify storage (localStorage/sessionStorage)
}));

export default useAuthStore;
