import React from 'react';
import { View, FlatList } from 'react-native';
import { usePortfolio } from '../hooks/usePorfolio';
import { ThemedText } from '../../../components/themed-text';
import { ThemedView } from '../../../components/themed-view';

export default function PortfolioScreen() {
  const { data, isLoading, error } = usePortfolio();

  if (isLoading) return <ThemedText>Loading...</ThemedText>;
  if (error) return <ThemedText>Error loading portfolio</ThemedText>;

  return (
    <ThemedView style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.ticker}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 16 }}>
            <ThemedText style={{ fontSize: 18, fontWeight: 'bold' }}>
              {item.ticker}
            </ThemedText>
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
  );
}
