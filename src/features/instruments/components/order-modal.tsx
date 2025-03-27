import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { useOrder } from '../hooks/use-order';
import { OrderRequest } from '../../../types/order';
import { Instrument } from '../../../types/instrument';
import { ModalLayout } from '../../../layouts/modal-layout';
import { ThemedText } from '../../../components/themed-text';

interface OrderModalProps {
  visible: boolean;
  onClose: () => void;
  instrument: Instrument | null;
}

export default function OrderModal({
  visible,
  onClose,
  instrument
}: OrderModalProps) {
  const [quantity, setQuantity] = useState('');
  const [orderType, setOrderType] = useState<'BUY' | 'SELL'>('BUY');
  const [orderMode, setOrderMode] = useState<'MARKET' | 'LIMIT'>('MARKET');
  const [price, setPrice] = useState<string>('');

  const { mutate, isPending } = useOrder();

  if (!instrument) return null; // 🔥 No renderizar si no hay instrumento seleccionado

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

  return (
    <ModalLayout visible={visible} onClose={onClose}>
      <ThemedText style={{ fontSize: 18, fontWeight: 'bold' }}>
        Orden para {instrument.name} ({instrument.ticker})
      </ThemedText>

      <ThemedText>Último Precio: ${instrument.last_price}</ThemedText>

      <ThemedText>Tipo de Orden:</ThemedText>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Button
          title="BUY"
          onPress={() => setOrderType('BUY')}
          color={orderType === 'BUY' ? 'green' : 'gray'}
        />
        <Button
          title="SELL"
          onPress={() => setOrderType('SELL')}
          color={orderType === 'SELL' ? 'red' : 'gray'}
        />
      </View>

      <ThemedText>Modo:</ThemedText>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Button
          title="MARKET"
          onPress={() => setOrderMode('MARKET')}
          color={orderMode === 'MARKET' ? 'blue' : 'gray'}
        />
        <Button
          title="LIMIT"
          onPress={() => setOrderMode('LIMIT')}
          color={orderMode === 'LIMIT' ? 'blue' : 'gray'}
        />
      </View>

      <ThemedText>Cantidad:</ThemedText>
      <TextInput
        keyboardType="numeric"
        value={quantity}
        onChangeText={setQuantity}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />

      {orderMode === 'LIMIT' && (
        <>
          <ThemedText>Precio:</ThemedText>
          <TextInput
            keyboardType="numeric"
            value={price}
            onChangeText={setPrice}
            style={{ borderBottomWidth: 1, marginBottom: 10 }}
          />
        </>
      )}
      <View style={{ gap: 10 }}>
        <Button
          title={isPending ? 'Enviando...' : 'Enviar Orden'}
          onPress={handleOrder}
          disabled={isPending}
        />
        <Button title="Cerrar" onPress={onClose} />
      </View>
    </ModalLayout>
  );
}
