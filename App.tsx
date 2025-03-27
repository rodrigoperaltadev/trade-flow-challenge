import { QueryClientProvider } from '@tanstack/react-query';
import { AppNavigator } from './src/navigation/app-navigator';
import { NavigationContainer } from '@react-navigation/native';
import { queryClient } from './src/services/query-client';
import { ThemedView } from './src/components/themed-view';
import { StyleSheet } from 'react-native';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <ThemedView style={styles.container}>
          <AppNavigator />
        </ThemedView>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
