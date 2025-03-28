import { StatusBar } from 'expo-status-bar';
import { useTheme } from '../../../theme/useTheme';
import { COLORS } from '../../../theme/colors';

export function CustomStatusBar() {
  const { theme } = useTheme();

  return (
    <StatusBar
      style={theme === 'dark' ? 'light' : 'dark'}
      backgroundColor={
        theme === 'dark' ? COLORS.backgroundDark : COLORS.backgroundLight
      }
    />
  );
}
