import React, { FC, useEffect, useState } from 'react';
import { View, TextInput, Alert, StyleSheet } from 'react-native';
import { useOrder } from '../hooks/use-order';
import { OrderMode, OrderRequest, OrderType } from '../../../types/order';
import { Instrument } from '../../../types/instrument';
import { ModalLayout } from '../../../layouts/modal-layout';
import { ThemedText } from '../../../components/themed-text';
import { ButtonGroup } from '../../../components/button-group';
import { COLORS } from '../../../theme/colors';
import { Button } from '../../../components/button';

interface OrderModalProps {
  visible: boolean;
  onClose: () => void;
  instrument: Instrument | null;
}

export const OrderModal: FC<OrderModalProps> = ({
  visible,
  onClose,
  instrument
}) => {
  const [quantity, setQuantity] = useState('');
  const [orderType, setOrderType] = useState<OrderType>('BUY');
  const [orderMode, setOrderMode] = useState<OrderMode>('MARKET');
  const [price, setPrice] = useState<string>('');

  const orderTypesButtons: OrderType[] = ['BUY', 'SELL'];

  const handleResetValues = () => {
    setQuantity('');
    setOrderType('BUY');
    setOrderMode('MARKET');
    setPrice('');
  };

  const { mutate, isPending } = useOrder();

  useEffect(() => {
    if (visible) return;
    handleResetValues();
  }, [visible]);

  if (!instrument) return null;

  const handleOrder = () => {
    const orderData: OrderRequest = {
      instrument_id: instrument.id,
      side: orderType,
      type: orderMode,
      quantity: Number(quantity),
      price: orderMode === 'LIMIT' ? Number(price) : undefined
    };

    mutate(orderData, {
      onSuccess: (data) => {
        Alert.alert('Orden enviada', `Estado: ${data.status}`);
        onClose();
      },
      onError: () => {
        Alert.alert('Error', 'No se pudo enviar la orden');
      }
    });
  };

  const isInvalid = () => {
    if (!quantity || parseInt(quantity) < 1) return true;
    if (orderMode === 'LIMIT' && !price) return true;
    if (orderMode === 'LIMIT' && parseInt(price) < 0) return true;
    return false;
  };

  return (
    <ModalLayout visible={visible} onClose={onClose}>
      <View style={styles.contentContainer}>
        <View>
          <ThemedText size={18} fontWeight="bold">
            Orden para {instrument.name}
          </ThemedText>
          <ThemedText size={18} fontWeight="bold">
            ({instrument.ticker})
          </ThemedText>
        </View>

        <View style={styles.buttonGroupContainer}>
          <ThemedText>Tipo de Orden:</ThemedText>

          <ButtonGroup
            buttons={orderTypesButtons}
            onButtonPress={(item) => setOrderType(item as OrderType)}
            selectedButton={orderType}
          />
        </View>
        <View style={styles.buttonGroupContainer}>
          <ThemedText>Modo:</ThemedText>
          <ButtonGroup
            buttons={['MARKET', 'LIMIT']}
            onButtonPress={(item) => setOrderMode(item as OrderMode)}
            selectedButton={orderMode}
          />
        </View>

        <View style={styles.textFieldContainer}>
          <ThemedText>Cantidad:</ThemedText>
          <TextInput
            keyboardType="numeric"
            value={quantity}
            onChangeText={setQuantity}
            style={styles.textInput}
          />
        </View>

        {orderMode === 'LIMIT' && (
          <View style={styles.textFieldContainer}>
            <ThemedText>Precio:</ThemedText>
            <TextInput
              keyboardType="numeric"
              value={price}
              onChangeText={setPrice}
              style={styles.textInput}
            />
          </View>
        )}
        <Button
          label="Enviar Orden"
          onPress={handleOrder}
          disabled={isInvalid()}
          isPending={isPending}
        />
      </View>
    </ModalLayout>
  );
};

const styles = StyleSheet.create({
  buttonGroupContainer: {
    gap: 8
  },
  contentContainer: {
    flex: 1,
    gap: 16
  },
  textFieldContainer: {
    gap: 8
  },
  textInput: {
    backgroundColor: COLORS.primaryLight,
    borderRadius: 16,
    fontSize: 14,
    marginBottom: 10,
    padding: 12
  }
});

export default OrderModal;
