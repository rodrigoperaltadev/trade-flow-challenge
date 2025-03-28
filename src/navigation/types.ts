import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type RootTabParamList = {
  Instruments: undefined;
  Portfolio: undefined;
  Search: undefined;
  Settings: undefined;
};

export type ScreenName = keyof RootTabParamList;

export type TabScreenProps<T extends keyof RootTabParamList> =
  BottomTabScreenProps<RootTabParamList, T>;
