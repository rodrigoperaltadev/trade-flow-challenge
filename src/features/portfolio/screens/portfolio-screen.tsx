import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { usePortfolio } from '../hooks/usePorfolio';
import { ThemedView } from '../../../components/themed-view';
import { CenteredScreenLayout } from '../../../layouts/centered-screen-layout';
import { Loader } from '../../../components/loader';
import { PortfolioListItem } from '../components/portfolio-list-item';
import { ListItemSeparator } from '../../../components/list-item-separator';
import { ErrorFetchLayout } from '../../../layouts/error-fetch-layout';

export default function PortfolioScreen() {
  const { data, isLoading, error, refetch } = usePortfolio();

  if (isLoading)
    return (
      <CenteredScreenLayout testID="portfolio-loading-view">
        <Loader visible />
      </CenteredScreenLayout>
    );
  if (error)
    return (
      <ErrorFetchLayout
        onRetry={() => {
          refetch();
        }}
      />
    );

  return (
    <ThemedView safeArea style={styles.container} testID="portfolio-list-view">
      <FlatList
        data={data}
        keyExtractor={(item, index) => item.ticker + index}
        renderItem={({ item }) => <PortfolioListItem item={item} />}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListItemSeparator />}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
});
