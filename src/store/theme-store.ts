import { create } from 'zustand';
import { Theme } from '../types/theme';

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: 'dark',
  setTheme: (theme: Theme) => set({ theme })
}));
