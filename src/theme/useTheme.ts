import { COLORS } from './colors';
import { useThemeStore } from '../store/theme-store';

export const useTheme = () => {
  const { theme } = useThemeStore();

  return {
    background:
      theme === 'light' ? COLORS.backgroundLight : COLORS.backgroundDark,
    text: theme === 'light' ? COLORS.textLight : COLORS.textDark,
    primary: COLORS.primary,
    secondary: COLORS.secondary,
    border: COLORS.border,
    success: COLORS.success,
    warning: COLORS.warning,
    error: COLORS.error,
    theme
  };
};
