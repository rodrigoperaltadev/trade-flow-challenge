/* eslint-disable no-undef */
// jest
jest.mock('expo-font');
jest.mock('expo-asset');
jest.mock('react-native-safe-area-context', () => {
  const inset = { top: 0, right: 0, bottom: 0, left: 0 };

  return {
    ...jest.requireActual('react-native-safe-area-context'),
    SafeAreaProvider: jest.fn(({ children }) => children),
    SafeAreaConsumer: jest.fn(({ children }) => children(inset)),
    useSafeAreaInsets: jest.fn(() => inset),
    useSafeAreaFrame: jest.fn(() => ({ x: 0, y: 0, width: 390, height: 844 }))
  };
});

jest.mock('@react-navigation/elements', () => {
  return {
    useHeaderHeight: jest.fn(() => 0)
  };
});
jest.mock('@react-navigation/native', () => {
  return {
    createNavigatorFactory: jest.fn(),
    useNavigation: jest.fn(() => ({
      navigate: jest.fn(),
      dispatch: jest.fn()
    })),
    useRoute: jest.fn(() => ({
      params: {
        id: '123'
      }
    })),
    useFocusEffect: jest.fn(() => {}),
    useIsFocused: jest.fn(() => false)
  };
});
