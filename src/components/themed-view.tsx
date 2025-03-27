import React, { FC } from 'react';
import { View, ViewProps } from 'react-native';
import { useTheme } from '../theme/useTheme';

export const ThemedView: FC<ViewProps> = ({ style, ...props }) => {
  const { background } = useTheme();

  return <View style={[{ backgroundColor: background }, style]} {...props} />;
};
