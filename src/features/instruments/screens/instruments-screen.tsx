import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { useInstruments } from '../hooks/use-instruments';
import { ThemedText } from '../../../components/themed-text';
import { ThemedView } from '../../../components/themed-view';
import OrderModal from '../components/order-modal';
import { Instrument } from '../../../types/instrument';
import { Loader } from '../../../components/loader';
import { CenteredScreenLayout } from '../../../layouts/centered-screen-layout';
import { InstrumentListItem } from '../components/instrument-list-item';
import { ListItemSeparator } from '../../../components/list-item-separator';

export default function InstrumentsScreen() {
  const { data, isLoading, error } = useInstruments();
  const [selectedInstrument, setSelectedInstrument] =
    useState<Instrument | null>(null);

  if (isLoading)
    return (
      <CenteredScreenLayout testID="instruments-loading-view">
        <Loader visible />
      </CenteredScreenLayout>
    );
  if (error)
    return (
      <CenteredScreenLayout testID="instruments-error-view">
        <ThemedText>Error loading instruments</ThemedText>
      </CenteredScreenLayout>
    );

  return (
    <React.Fragment>
      <ThemedView
        safeArea
        style={styles.container}
        testID="instruments-list-view">
        <FlatList
          data={data}
          keyExtractor={(item) => item.ticker}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <InstrumentListItem
              item={item}
              onItemPress={setSelectedInstrument}
            />
          )}
          ItemSeparatorComponent={() => <ListItemSeparator />}
        />
      </ThemedView>
      <OrderModal
        visible={selectedInstrument !== null}
        onClose={() => setSelectedInstrument(null)}
        instrument={selectedInstrument}
      />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,
    padding: 16
  }
});
