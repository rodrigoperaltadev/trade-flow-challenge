import React from 'react';
import { StyleSheet } from 'react-native';
import { LottieLoader, LottieLoaderProps } from 'lottie-loader-react-native';
import { lottieLoader } from '../assets/lottie';

interface LoaderProps {
  visible: boolean;
  animationStyle?: LottieLoaderProps;
}

export const Loader: React.FC<LoaderProps> = ({ visible, animationStyle }) => {
  return (
    <LottieLoader
      visible={visible}
      source={lottieLoader}
      speed={2.5}
      loop
      style={styles.lottie}
      {...animationStyle}
    />
  );
};

const styles = StyleSheet.create({
  lottie: { height: 80, width: 80 }
});
