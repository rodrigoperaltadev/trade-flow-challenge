import React, { FC } from 'react';
import { Badge, BadgeSeverity } from './badge';

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

  const severity: Record<PercentageType, BadgeSeverity> = {
    positive: BadgeSeverity.SUCCESS,
    negative: BadgeSeverity.ERROR,
    neutral: BadgeSeverity.INFO
  };

  const percentageType = getPercentageType(value);
  const isPositive = value > 0;
  const formattedValue = `${isPositive ? '+' : ''}${value.toFixed(2)}%`;

  return <Badge value={formattedValue} severity={severity[percentageType]} />;
};
