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
import { useTranslation } from 'react-i18next';

export default function SearchScreen() {
  const { t } = useTranslation();
  const [query, setQuery] = useState('');
  const { data, isLoading, error } = useSearch(query);

  const renderContent = useCallback(() => {
    if (isLoading)
      return (
        <CenteredScreenLayout testID="search-loading-view">
          <Loader visible />
        </CenteredScreenLayout>
      );
    if (error)
      return (
        <CenteredScreenLayout testID="search-error-view">
          <ThemedText>{t('search.error')}</ThemedText>
        </CenteredScreenLayout>
      );
    if (!data?.length)
      return (
        <CenteredScreenLayout testID="search-empty-view">
          <ThemedText>
            {query ? t('search.noResults') : t('common.doASearch')}
          </ThemedText>
        </CenteredScreenLayout>
      );
    return (
      <FlatList
        testID="search-results-list"
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
  }, [isLoading, error, t, data, query]);

  return (
    <ThemedView safeArea style={styles.container} testID="search-screen">
      <TextInput
        placeholder={t('search.placeholder')}
        value={query}
        onChangeText={setQuery}
        style={styles.textInput}
        testID="search-input"
      />
      {renderContent()}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
