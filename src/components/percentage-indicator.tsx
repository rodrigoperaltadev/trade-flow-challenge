import React, { FC } from 'react';
import { Text, StyleSheet, View, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../theme/colors';

interface PercentageIndicatorProps {
  value: number;
}

type PercentageType = 'positive' | 'negative' | 'neutral';

export const PercentageIndicator: FC<PercentageIndicatorProps> = ({
  value
}) => {
  const getPercentageType = (value: number): PercentageType => {
    if (!value) return 'neutral';
    return value > 0 ? 'positive' : 'negative';
  };

  const percentageIndicatorStyle: Record<
    PercentageType,
    { text: TextStyle; view: ViewStyle }
  > = {
    positive: {
      text: styles.positiveText,
      view: styles.positiveContainer
    },
    negative: {
      text: styles.negativeText,
      view: styles.negativeContainer
    },
    neutral: {
      text: styles.neutralText,
      view: styles.neutralContainer
    }
  };

  const percentageType = getPercentageType(value);
  const isPositive = value > 0;
  const formattedValue = `${isPositive ? '+' : ''}${value.toFixed(2)}%`;

  return (
    <View
      style={[styles.container, percentageIndicatorStyle[percentageType].view]}>
      <Text
        style={[styles.text, percentageIndicatorStyle[percentageType].text]}>
        {formattedValue}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    paddingHorizontal: 8,
    paddingVertical: 4
  },
  negativeContainer: {
    backgroundColor: COLORS.errorLight
  },
  negativeText: {
    color: COLORS.error
  },
  neutralContainer: {
    backgroundColor: COLORS.primaryLight
  },
  neutralText: {
    color: COLORS.primary
  },
  positiveContainer: {
    backgroundColor: COLORS.successLight
  },
  positiveText: {
    color: COLORS.success
  },
  text: {
    fontSize: 10,
    fontWeight: 'bold'
  }
});
