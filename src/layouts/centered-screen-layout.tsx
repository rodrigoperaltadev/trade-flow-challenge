import React, { FC, PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';
import { ThemedView } from '../components/themed-view';

type CenteredScreenLayoutProps = PropsWithChildren & {
  testID?: string;
};

export const CenteredScreenLayout: FC<CenteredScreenLayoutProps> = ({
  children,
  testID
}) => {
  return (
    <ThemedView style={styles.container} testID={testID}>
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
