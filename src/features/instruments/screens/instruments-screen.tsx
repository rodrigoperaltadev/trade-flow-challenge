import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { useInstruments } from '../hooks/use-instruments';
import { ThemedText } from '../../../components/themed-text';
import { ThemedView } from '../../../components/themed-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import OrderModal from '../components/order-modal';
import { Instrument } from '../../../types/instrument';
import { Loader } from '../../../components/loader';
import { CenteredScreenLayout } from '../../../layouts/centered-screen-layout';
import { InstrumentListItem } from '../components/instrument-list-item';

export default function InstrumentsScreen() {
  const { data, isLoading, error } = useInstruments();
  const [selectedInstrument, setSelectedInstrument] =
    useState<Instrument | null>(null);

  if (isLoading)
    return (
      <CenteredScreenLayout>
        <Loader visible />
      </CenteredScreenLayout>
    );
  if (error) return <ThemedText>Error loading instruments</ThemedText>;

  return (
    <React.Fragment>
      <SafeAreaView style={styles.safeAreaContainer}>
        <ThemedView style={styles.container}>
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
          />
        </ThemedView>
      </SafeAreaView>
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
    padding: 16
  },
  safeAreaContainer: {
    flex: 1
  }
});
