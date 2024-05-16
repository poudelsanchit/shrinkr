import create from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      login: (username, email) => {
        set({ isAuthenticated: true, user: username });
      },
      logout: () => {
        set({isAuthenticated: false, user: ''});
      },
    }),
    {
      name: "auth-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useAuthStore;
