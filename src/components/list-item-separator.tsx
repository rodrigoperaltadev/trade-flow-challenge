import { StyleSheet, View } from 'react-native';
import { useTheme } from '../theme/useTheme';

export const ListItemSeparator = () => {
  const { itemSeparatorColor } = useTheme();
  return (
    <View style={[styles.separator, { backgroundColor: itemSeparatorColor }]} />
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: '100%'
  }
});
