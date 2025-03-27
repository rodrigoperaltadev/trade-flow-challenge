import React, { FC, PropsWithChildren } from 'react';
import { View, StyleSheet } from 'react-native';

export const CenteredScreenLayout: FC<PropsWithChildren> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
});
