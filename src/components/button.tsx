import { FC } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native';
import { COLORS } from '../theme/colors';

type ButtonProps = TouchableOpacityProps & {
  isPending?: boolean;
  label: string;
  textProps?: TextProps;
};

export const Button: FC<ButtonProps> = ({
  isPending = false,
  label,
  textProps,
  ...buttonProps
}) => {
  const styleButton = {
    backgroundColor: buttonProps.disabled ? COLORS.grey : COLORS.primary,
    opacity: buttonProps.disabled ? 0.5 : 1
  };

  return (
    <TouchableOpacity
      {...buttonProps}
      style={[{ ...styleButton }, { ...styles.container }, buttonProps.style]}>
      {isPending && <ActivityIndicator color={'white'} size={20} />}
      <Text style={styles.buttonText} {...textProps}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: COLORS.white,
    fontSize: 16
  },
  container: {
    alignItems: 'center',
    borderRadius: 16,
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    padding: 12
  }
});
