import { QueryClientProvider } from '@tanstack/react-query';
import { AppNavigator } from './src/navigation/app-navigator';
import { NavigationContainer } from '@react-navigation/native';
import { queryClient } from './src/services/query-client';
import { ThemedView } from './src/components/themed-view';
import { StyleSheet } from 'react-native';
import { CustomStatusBar } from './src/features/instruments/components/custom-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import './src/translations/i18n';
import { useCallback, useEffect, useState } from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import * as Font from 'expo-font';

SplashScreen.preventAutoHideAsync();
SplashScreen.setOptions({
  duration: 1000,
  fade: true
});

const App = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(Entypo.font);
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(() => {
    if (appIsReady) {
      SplashScreen.hide();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <NavigationContainer>
          <CustomStatusBar />
          <ThemedView onLayout={onLayoutRootView} style={styles.container}>
            <AppNavigator />
          </ThemedView>
        </NavigationContainer>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
