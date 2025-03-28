import { QueryClientProvider } from '@tanstack/react-query';
import { AppNavigator } from './src/navigation/app-navigator';
import { NavigationContainer } from '@react-navigation/native';
import { queryClient } from './src/services/query-client';
import { ThemedView } from './src/components/themed-view';
import { StyleSheet } from 'react-native';
import { CustomStatusBar } from './src/features/instruments/components/custom-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <NavigationContainer>
          <CustomStatusBar />
          <ThemedView style={styles.container}>
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
