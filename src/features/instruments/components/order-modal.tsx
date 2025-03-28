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
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
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
        Alert.alert(
          t('instruments.order.success'),
          t('instruments.order.status', { status: data.status })
        );
        onClose();
      },
      onError: () => {
        Alert.alert(t('common.error'), t('instruments.order.error'));
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
            {t('instruments.order.title', { name: instrument.name })}
          </ThemedText>
          <ThemedText size={18} fontWeight="bold">
            ({instrument.ticker})
          </ThemedText>
        </View>

        <View style={styles.buttonGroupContainer}>
          <ThemedText>{t('instruments.order.type')}:</ThemedText>

          <ButtonGroup
            buttons={orderTypesButtons}
            onButtonPress={(item) => setOrderType(item as OrderType)}
            selectedButton={orderType}
          />
        </View>
        <View style={styles.buttonGroupContainer}>
          <ThemedText>{t('instruments.order.mode')}:</ThemedText>
          <ButtonGroup
            buttons={['MARKET', 'LIMIT']}
            onButtonPress={(item) => setOrderMode(item as OrderMode)}
            selectedButton={orderMode}
          />
        </View>

        <View style={styles.textFieldContainer}>
          <ThemedText>{t('instruments.order.quantity')}:</ThemedText>
          <TextInput
            keyboardType="numeric"
            value={quantity}
            onChangeText={setQuantity}
            style={styles.textInput}
          />
        </View>

        {orderMode === 'LIMIT' && (
          <View style={styles.textFieldContainer}>
            <ThemedText>{t('instruments.order.price')}:</ThemedText>
            <TextInput
              keyboardType="numeric"
              value={price}
              onChangeText={setPrice}
              style={styles.textInput}
            />
          </View>
        )}
        <Button
          label={t('instruments.order.submit')}
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
