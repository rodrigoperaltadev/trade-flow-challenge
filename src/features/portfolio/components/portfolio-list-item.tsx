import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native';
import { ThemedText } from '../../../components/themed-text';
import { PortfolioItem } from '../../../types/portfolio';
import { FC } from 'react';
import { logoPNG } from '../../../assets/images';
import { PercentageIndicator } from '../../../components/percentage-indicator';
import { formatCurrency } from '../../../utils/formatters';
import { useTranslation } from 'react-i18next';

type PortfolioListItemProps = {
  item: PortfolioItem;
};

export const PortfolioListItem: FC<PortfolioListItemProps> = ({ item }) => {
  const { t } = useTranslation();
  const marketPrice = item.quantity * item.last_price;
  const investmentReturn =
    (item.last_price - item.avg_cost_price) * item.quantity;

  const hasProfit = investmentReturn >= 0;

  const investmentReturnPercentage =
    ((item.last_price - item.avg_cost_price) / item.avg_cost_price) * 100;

  return (
    <View style={styles.itemContainer}>
      <Image
        source={logoPNG as ImageSourcePropType}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.header}>
        <ThemedText size={14} fontWeight="bold">
          {item.ticker}
        </ThemedText>
        <ThemedText size={12}>
          {t('portfolio.asset.amount')}: {item.quantity}
        </ThemedText>
        <ThemedText size={12}>{formatCurrency(marketPrice)}</ThemedText>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.profitContainer}>
          <ThemedText
            size={12}
            fontWeight="bold"
            type={hasProfit ? 'success' : 'error'}>
            {formatCurrency(investmentReturn)}
          </ThemedText>
          <PercentageIndicator value={investmentReturnPercentage} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'space-between'
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  itemContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 16,
    height: 80,
    padding: 8,
    width: '100%'
  },
  logo: {
    borderRadius: 50,
    height: 30,
    width: 30
  },
  profitContainer: {
    alignItems: 'flex-end',
    gap: 4,
    justifyContent: 'flex-end'
  }
});
