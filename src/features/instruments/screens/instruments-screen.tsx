import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useInstruments } from '../hooks/use-instruments';
import { ThemedText } from '../../../components/themed-text';
import { ThemedView } from '../../../components/themed-view';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function InstrumentsScreen() {
  const { data, isLoading, error } = useInstruments();

  if (isLoading) return <ThemedText>Loading...</ThemedText>;
  if (error) return <ThemedText>Error loading instruments</ThemedText>;

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ThemedView style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.ticker}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <ThemedText style={styles.itemText}>
                {item.ticker} - {item.name}
              </ThemedText>
              <ThemedText>Último Precio: ${item.last_price}</ThemedText>
              <ThemedText>
                Retorno: {(item.last_price - item.close_price).toFixed(2)}
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
