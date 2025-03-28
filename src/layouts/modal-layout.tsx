import React, { FC } from 'react';
import { Modal, View, StyleSheet, Pressable, Platform } from 'react-native';
import { COLORS } from '../theme/colors';
import { ThemedView } from '../components/themed-view';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface ModalLayoutProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const ModalLayout: FC<ModalLayoutProps> = ({
  visible,
  onClose,
  children
}) => {
  const { top } = useSafeAreaInsets();
  const isIos = Platform.OS === 'ios';
  const paddingTop = isIos ? top : 0;

  return (
    <Modal
      transparent
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}>
      <ThemedView style={[styles.overlay, { paddingTop }]}>
        <Pressable onPress={onClose}>
          <Ionicons name="close" size={32} color={COLORS.black} />
        </Pressable>
        <View style={styles.modalContent}>{children}</View>
      </ThemedView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    padding: 8
  },
  overlay: {
    flex: 1,
    padding: 8
  }
});
