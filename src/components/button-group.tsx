import { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../theme/colors';

type ButtonGroupProps = {
  buttons: string[];
  selectedButton: string;
  onButtonPress: (button: string) => void;
};

export const ButtonGroup: FC<ButtonGroupProps> = ({
  buttons,
  selectedButton,
  onButtonPress
}) => {
  const isFirstButton = (index: number) => index === 0;
  const isLastButton = (index: number) => index === buttons.length - 1;
  const isSelectedButton = (button: string) => selectedButton === button;

  const getButtonStyle = (index: number) => ({
    backgroundColor: isSelectedButton(buttons[index])
      ? COLORS.primary
      : COLORS.primaryLight,
    borderTopLeftRadius: isFirstButton(index) ? 8 : 0,
    borderBottomLeftRadius: isFirstButton(index) ? 8 : 0,
    borderTopRightRadius: isLastButton(index) ? 8 : 0,
    borderBottomRightRadius: isLastButton(index) ? 8 : 0
  });

  return (
    <View style={styles.container}>
      {buttons.map((button, index) => (
        <TouchableOpacity
          key={button}
          onPress={() => onButtonPress(button)}
          style={[
            styles.button,
            {
              ...getButtonStyle(index)
            }
          ]}>
          <Text
            style={[
              styles.buttonText,
              { color: selectedButton === button ? COLORS.white : COLORS.black }
            ]}>
            {button}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    flex: 1,
    padding: 8
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'semibold',
    textTransform: 'capitalize'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});
