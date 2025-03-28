import { StyleSheet, View } from 'react-native';
import { ThemedText } from '../../../components/themed-text';
import { ThemedView } from '../../../components/themed-view';
import { ButtonGroup } from '../../../components/button-group';
import { Theme } from '../../../types/theme';
import { useThemeStore } from '../../../store/theme-store';

export const SettingsScreen = () => {
  const themeButtons: Theme[] = ['light', 'dark'];
  const { theme, setTheme } = useThemeStore();

  return (
    <ThemedView safeArea style={styles.container}>
      <View style={styles.settingContainer}>
        <ThemedText fontWeight="bold" size={18}>
          Theme
        </ThemedText>
        <ButtonGroup
          buttons={themeButtons}
          selectedButton={theme}
          onButtonPress={(theme) => {
            setTheme(theme as Theme);
          }}
        />
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,
    padding: 16
  },
  settingContainer: {
    gap: 8
  }
});
