import React, { FC, PropsWithChildren } from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { ThemedView } from '../components/themed-view';

type CenteredScreenLayoutProps = PropsWithChildren & {
  testID?: string;
  style?: StyleProp<ViewStyle>;
};

export const CenteredScreenLayout: FC<CenteredScreenLayoutProps> = ({
  children,
  testID,
  style
}) => {
  return (
    <ThemedView style={[styles.container, style]} testID={testID}>
      {children}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
});
