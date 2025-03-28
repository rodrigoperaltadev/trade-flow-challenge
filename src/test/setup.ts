import '@testing-library/jest-native/extend-expect';
import { View } from 'react-native';

// Mock react-native-safe-area-context
jest.mock('react-native-safe-area-context', () => ({
  SafeAreaProvider: ({ children }: { children: React.ReactNode }) => children,
  useSafeAreaInsets: () => ({ top: 0, right: 0, bottom: 0, left: 0 })
}));

// Mock expo-status-bar
jest.mock('expo-status-bar', () => ({
  StatusBar: () => null
}));

// Mock UIManager
jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native');

  RN.UIManager.getViewManagerConfig = (name: string) => {
    if (name === 'RCTView') {
      return {};
    }
    return null;
  };

  return RN;
});

// Mock react-native-gesture-handler
jest.mock('react-native-gesture-handler', () => ({
  Swipeable: View,
  DrawerLayout: View,
  State: {},
  ScrollView: View,
  Slider: View,
  Switch: View,
  TextInput: View,
  ViewPropTypes: { style: null },
  PanGestureHandler: View,
  TapGestureHandler: View,
  FlatList: View,
  GestureHandlerRootView: View,
  createNativeWrapper: () => View,
  gestureHandlerRootHOC: () => null,
  NativeViewGestureHandler: View,
  PinchGestureHandler: View,
  RotationGestureHandler: View,
  FlingGestureHandler: View,
  LongPressGestureHandler: View,
  ForceTouchGestureHandler: View,
  RawButton: View,
  BaseButton: View,
  RectButton: View,
  BorderlessButton: View,
  TouchableOpacity: View,
  TouchableHighlight: View,
  TouchableWithoutFeedback: View,
  TouchableNativeFeedback: View,
  Directions: {}
}));

// Mock @react-navigation
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      goBack: jest.fn()
    }),
    createNavigatorFactory: () => () => ({
      Navigator: ({ children }: { children: React.ReactNode }) => children,
      Screen: ({ children }: { children: React.ReactNode }) => children
    })
  };
});

jest.mock('@react-navigation/bottom-tabs', () => {
  const { createNavigatorFactory } = jest.requireActual(
    '@react-navigation/native'
  );
  return {
    createBottomTabNavigator: createNavigatorFactory(() => ({
      Navigator: ({ children }: { children: React.ReactNode }) => children,
      Screen: ({ children }: { children: React.ReactNode }) => children
    }))
  };
});

jest.mock('@react-navigation/stack', () => {
  const { createNavigatorFactory } = jest.requireActual(
    '@react-navigation/native'
  );
  return {
    createStackNavigator: createNavigatorFactory(() => ({
      Navigator: ({ children }: { children: React.ReactNode }) => children,
      Screen: ({ children }: { children: React.ReactNode }) => children
    }))
  };
});
