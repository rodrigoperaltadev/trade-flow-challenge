import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import InstrumentsScreen from '../features/instruments/screens/instruments-screen';
import PortfolioScreen from '../features/portfolio/screens/portfolio-screen';
import SearchScreen from '../features/search/screens/search-screen';
import OrderModal from '../features/orders/screens/order-modal';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

enum Screen {
  Instruments = 'Instruments',
  Portfolio = 'Portfolio',
  Search = 'Search',
}

type TabScreen = keyof typeof Screen;

const TAB_ICONS: Record<TabScreen, keyof typeof Ionicons.glyphMap> = {
  Instruments: 'bar-chart-outline',
  Portfolio: 'briefcase-outline',
  Search: 'search-outline',
};

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function PlaceholderScreen({ route }: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20 }}>Pantalla: {route.name}</Text>
    </View>
  );
}

const TabNavigator = () => {

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name={TAB_ICONS[route.name as TabScreen]} size={size} color={color} />
        ),
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name={Screen.Instruments} component={PlaceholderScreen} />
      <Tab.Screen name={Screen.Portfolio} component={PlaceholderScreen} />
      <Tab.Screen name={Screen.Search} component={PlaceholderScreen} />
    </Tab.Navigator>
  );
}

export const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={TabNavigator} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="OrderModal" component={PlaceholderScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
