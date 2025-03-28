import React, { useCallback, useState } from 'react';
import { View, TextInput, FlatList, StyleSheet } from 'react-native';
import { useSearch } from '../hooks/useSearch';
import { ThemedView } from '../../../components/themed-view';
import { ThemedText } from '../../../components/themed-text';
import { formatCurrency } from '../../../utils/formatters';
import { COLORS } from '../../../theme/colors';
import { CenteredScreenLayout } from '../../../layouts/centered-screen-layout';
import { Loader } from '../../../components/loader';
import { ListItemSeparator } from '../../../components/list-item-separator';

export default function SearchScreen() {
  const [query, setQuery] = useState('');
  const { data, isLoading, error } = useSearch(query);

  const renderContent = useCallback(() => {
    if (isLoading)
      return (
        <CenteredScreenLayout>
          <Loader visible />
        </CenteredScreenLayout>
      );
    if (error)
      return (
        <CenteredScreenLayout>
          <ThemedText>Error en la búsqueda</ThemedText>
        </CenteredScreenLayout>
      );
    if (!data?.length)
      return (
        <CenteredScreenLayout>
          <ThemedText>No se encontraron resultados</ThemedText>
        </CenteredScreenLayout>
      );
    return (
      <FlatList
        data={data}
        keyExtractor={(item) => item.ticker}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <ThemedText style={styles.itemText}>
              {item.ticker} - {item.name}
            </ThemedText>
            <ThemedText>{formatCurrency(item.last_price)}</ThemedText>
          </View>
        )}
        ItemSeparatorComponent={() => <ListItemSeparator />}
      />
    );
  }, [data, isLoading, error]);

  return (
    <ThemedView safeArea style={styles.container}>
      <TextInput
        placeholder="Buscar por ticker..."
        value={query}
        onChangeText={setQuery}
        style={styles.textInput}
      />
      {renderContent()}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,
    padding: 16
  },
  itemContainer: {
    gap: 8,
    padding: 16
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  textInput: {
    backgroundColor: COLORS.primaryLight,
    borderRadius: 16,
    fontSize: 14,
    marginBottom: 10,
    padding: 12
  }
});
