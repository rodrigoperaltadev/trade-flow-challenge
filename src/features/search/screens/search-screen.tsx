import React, { useState } from 'react';
import { View, TextInput, FlatList, StyleSheet } from 'react-native';
import { useSearch } from '../hooks/useSearch';
import { ThemedView } from '../../../components/themed-view';
import { ThemedText } from '../../../components/themed-text';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SearchScreen() {
  const [query, setQuery] = useState('');
  const { data, isLoading, error } = useSearch(query);

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ThemedView style={styles.container}>
        <TextInput
          placeholder="Buscar por ticker..."
          value={query}
          onChangeText={setQuery}
          style={styles.textInput}
        />
        {isLoading && <ThemedText>Buscando...</ThemedText>}
        {error && <ThemedText>Error en la búsqueda</ThemedText>}
        <FlatList
          data={data}
          keyExtractor={(item) => item.ticker}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <ThemedText style={styles.itemText}>
                {item.ticker} - {item.name}
              </ThemedText>
              <ThemedText>Último Precio: ${item.last_price}</ThemedText>
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
  },
  textInput: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 16,
    paddingHorizontal: 8
  }
});
