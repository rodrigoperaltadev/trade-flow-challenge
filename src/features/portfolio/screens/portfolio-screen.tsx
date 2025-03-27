import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { usePortfolio } from '../hooks/usePorfolio';
import { ThemedText } from '../../../components/themed-text';
import { ThemedView } from '../../../components/themed-view';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PortfolioScreen() {
  const { data, isLoading, error } = usePortfolio();

  if (isLoading) return <ThemedText>Loading...</ThemedText>;
  if (error) return <ThemedText>Error loading portfolio</ThemedText>;

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ThemedView style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.ticker}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <ThemedText style={styles.itemText}>{item.ticker}</ThemedText>
              <ThemedText>Cantidad: {item.quantity}</ThemedText>
              <ThemedText>
                Valor Mercado: ${(item.quantity * item.last_price).toFixed(2)}
              </ThemedText>
              <ThemedText>
                Ganancia: $
                {(
                  (item.last_price - item.avg_cost_price) *
                  item.quantity
                ).toFixed(2)}
              </ThemedText>
              <ThemedText>
                Rendimiento:{' '}
                {(
                  ((item.last_price - item.avg_cost_price) /
                    item.avg_cost_price) *
                  100
                ).toFixed(2)}
                %
              </ThemedText>
            </View>
          )}
        />
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  itemContainer: {
    marginBottom: 16
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  safeAreaContainer: {
    flex: 1
  }
});
