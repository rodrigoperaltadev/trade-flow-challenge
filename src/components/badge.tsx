import { FC } from 'react';
import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import { COLORS } from '../theme/colors';

export enum BadgeSeverity {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info'
}

type BadgeProps = {
  value: string;
  severity?: BadgeSeverity;
  containerStyle?: ViewStyle;
};

export const Badge: FC<BadgeProps> = ({
  value,
  severity = BadgeSeverity.SUCCESS,
  containerStyle
}) => {
  const badgeStyle: Record<
    BadgeSeverity,
    { text: TextStyle; view: ViewStyle }
  > = {
    [BadgeSeverity.SUCCESS]: {
      text: styles.successText,
      view: styles.successContainer
    },
    [BadgeSeverity.ERROR]: {
      text: styles.errorText,
      view: styles.errorContainer
    },
    [BadgeSeverity.INFO]: {
      text: styles.infoText,
      view: styles.infoContainer
    }
  };

  return (
    <View style={[styles.container, badgeStyle[severity].view, containerStyle]}>
      <Text style={[styles.text, badgeStyle[severity].text]}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 16,
    paddingHorizontal: 8,
    paddingVertical: 4
  },
  errorContainer: {
    backgroundColor: COLORS.error
  },
  errorText: {
    color: COLORS.errorLight
  },
  infoContainer: {
    backgroundColor: COLORS.primary
  },
  infoText: {
    color: COLORS.primaryLight
  },
  successContainer: {
    backgroundColor: COLORS.success
  },
  successText: {
    color: COLORS.successLight
  },
  text: {
    fontSize: 10,
    fontWeight: 'bold'
  }
});
