import { create } from "zustand";

type AuthState = {
    isLogin: boolean;
    loading: boolean;
    login: () => void;
    logout: () => void;
    setLoading: (value: boolean) => void;
};

export const useAuthStore = create<AuthState>((set) => ({
    isLogin: false, 
    loading: false, 
    login: () => {
        set({ loading: true });
        setTimeout(() => {
            set({ isLogin: true, loading: false }); 
        }, 1000); 
    },
    logout: () => {
        set({ isLogin: false }); 
    },
    setLoading: (value) => set({ loading: value }),
}));
