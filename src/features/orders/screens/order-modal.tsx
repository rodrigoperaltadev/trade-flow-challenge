import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function OrderModal() {
  return (
    <View style={styles.container}>
      <Text>Order Modal</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
