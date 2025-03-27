import React, { FC, useState } from 'react';
import { TextInput, Button, StyleSheet } from 'react-native';
import { ModalLayout } from '../../../layouts/modal-layout';
import { ThemedText } from '../../../components/themed-text';
import { Instrument } from '../../../types/instrument';

interface OrderModalProps {
  visible: boolean;
  onClose: () => void;
  instrument: Instrument | null;
}

const OrderModal: FC<OrderModalProps> = ({ visible, onClose, instrument }) => {
  const [quantity, setQuantity] = useState('');

  if (!instrument) return null;

  return (
    <ModalLayout visible={visible} onClose={onClose}>
      <ThemedText style={styles.titleText}>
        Orden para Instrumento {instrument.name}
      </ThemedText>
      <ThemedText>Último Precio: ${instrument.last_price}</ThemedText>
      <ThemedText>Cantidad:</ThemedText>
      <TextInput
        keyboardType="numeric"
        value={quantity}
        onChangeText={setQuantity}
        style={styles.input}
      />

      <Button title="Cerrar" onPress={onClose} />
    </ModalLayout>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    marginBottom: 10
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default OrderModal;
