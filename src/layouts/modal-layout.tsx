import React, { FC } from 'react';
import { Modal, View, StyleSheet } from 'react-native';
import { COLORS } from '../theme/colors';

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
  return (
    <Modal
      transparent
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.modalContent}>{children}</View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    elevation: 5,
    padding: 20,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    width: '90%'
  },
  overlay: {
    alignItems: 'center',
    backgroundColor: COLORS.overlayModal,
    flex: 1,
    justifyContent: 'center'
  }
});
