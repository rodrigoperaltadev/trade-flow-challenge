import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import InstrumentsScreen from '../features/instruments/screens/instruments-screen';
import PortfolioScreen from '../features/portfolio/screens/portfolio-screen';
import SearchScreen from '../features/search/screens/search-screen';
import { Ionicons } from '@expo/vector-icons';
import { ScreenName, TabParamList, RootStackParamList } from './types';
import { useTheme } from '../theme/useTheme';
import { SettingsScreen } from '../features/settings/screens/settings-screen';
import { useTranslation } from 'react-i18next';

const TAB_ICONS: Record<ScreenName, keyof typeof Ionicons.glyphMap> = {
  Instruments: 'bar-chart-outline',
  Portfolio: 'briefcase-outline',
  Search: 'search-outline',
  Settings: 'settings-outline'
};

const Tab = createBottomTabNavigator<TabParamList>();
const Stack = createStackNavigator<RootStackParamList>();

const TabNavigator = () => {
  const { t } = useTranslation();
  const {
    activeTabIcon,
    inactiveTabIcon,
    tabBarBackgroundColor,
    tabBarBorderColor
  } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name={TAB_ICONS[route.name]} size={size} color={color} />
        ),
        tabBarActiveTintColor: activeTabIcon,
        tabBarInactiveTintColor: inactiveTabIcon,
        tabBarStyle: {
          backgroundColor: tabBarBackgroundColor,
          borderColor: tabBarBorderColor
        },
        tabBarLabel: t(`navigation.${route.name.toLowerCase()}`)
      })}>
      <Tab.Screen name="Instruments" component={InstrumentsScreen} />
      <Tab.Screen name="Portfolio" component={PortfolioScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={TabNavigator} />
    </Stack.Navigator>
  );
};
