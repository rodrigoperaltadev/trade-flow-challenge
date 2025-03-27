import React, { FC } from 'react';
import { useTheme } from '../theme/useTheme';
import { Text, TextProps } from 'react-native';

export const ThemedText: FC<TextProps> = ({ style, ...props }) => {
  const { text } = useTheme();

  return <Text style={[{ color: text }, style]} {...props} />;
};
