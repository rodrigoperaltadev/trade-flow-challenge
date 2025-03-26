import { QueryClientProvider } from '@tanstack/react-query';
import { AppNavigator } from './src/navigation/app-navigator';
import { NavigationContainer } from '@react-navigation/native';
import { queryClient } from './src/services/query-client';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
