import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import { ThemedText } from '../../../components/themed-text';
import { Instrument } from '../../../types/instrument';
import { FC } from 'react';
import { logoPNG } from '../../../assets/images';
import { PercentageIndicator } from '../../../components/percentage-indicator';
import { COLORS } from '../../../theme/colors';
import { formatCurrency } from '../../../utils/formatters';

type InstrumentListItemProps = {
  item: Instrument;
  onItemPress: (instrument: Instrument) => void;
};

export const InstrumentListItem: FC<InstrumentListItemProps> = ({
  item,
  onItemPress
}) => {
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => onItemPress(item)}>
      <Image source={logoPNG as ImageSourcePropType} style={styles.logo} />
      <View style={styles.nameContainer}>
        <ThemedText style={styles.nameText}>{item.name}</ThemedText>
        <ThemedText style={styles.tickerText}>{item.ticker}</ThemedText>
      </View>
      <View style={styles.marketInfoContainer}>
        <ThemedText>{formatCurrency(item.last_price)}</ThemedText>
        <PercentageIndicator value={item.return_percentage} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 16,
    height: 80,
    padding: 8
  },
  logo: {
    borderRadius: 50,
    height: 30,
    width: 30
  },
  marketInfoContainer: {
    alignItems: 'flex-end',
    flexDirection: 'column',
    gap: 4
  },
  nameContainer: {
    flexDirection: 'column',
    flex: 1,
    gap: 4
  },
  nameText: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  tickerText: {
    color: COLORS.grey,
    fontSize: 14
  }
});
