import React, { FC } from 'react';
import { useTheme } from '../theme/useTheme';
import { Text, TextProps } from 'react-native';
import { COLORS } from '../theme/colors';

type TextType = 'success' | 'error' | 'info' | 'neutral';

type ThemedTextProps = TextProps & {
  type?: TextType;
  size?: number;
  fontWeight?: 'normal' | 'bold';
};

export const ThemedText: FC<ThemedTextProps> = ({
  style,
  type = 'neutral',
  size,
  fontWeight = 'normal',
  ...props
}) => {
  const { text } = useTheme();

  const textColor: Record<TextType, string> = {
    success: COLORS.success,
    error: COLORS.error,
    info: COLORS.primary,
    neutral: text
  };

  return (
    <Text
      style={[{ color: textColor[type], fontSize: size, fontWeight }, style]}
      {...props}
    />
  );
};
