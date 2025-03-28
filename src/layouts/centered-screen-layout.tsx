import React, { FC, PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';
import { ThemedView } from '../components/themed-view';

export const CenteredScreenLayout: FC<PropsWithChildren> = ({ children }) => {
  return <ThemedView style={styles.container}>{children}</ThemedView>;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
});
