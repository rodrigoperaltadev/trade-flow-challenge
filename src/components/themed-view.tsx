import React, { FC } from 'react';
import { View, ViewProps } from 'react-native';
import { useTheme } from '../theme/useTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type ThemedViewProps = ViewProps & {
  safeArea?: boolean;
};

export const ThemedView: FC<ThemedViewProps> = ({
  style,
  safeArea,
  ...props
}) => {
  const { background } = useTheme();
  const { top } = useSafeAreaInsets();
  const paddingTop = safeArea ? top : 0;

  return (
    <View
      style={[{ backgroundColor: background, paddingTop }, style]}
      {...props}
    />
  );
};
