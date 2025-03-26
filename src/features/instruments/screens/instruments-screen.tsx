import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function InstrumentsScreen() {
  return (
    <View style={styles.container}>
      <Text>Instruments Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
});
