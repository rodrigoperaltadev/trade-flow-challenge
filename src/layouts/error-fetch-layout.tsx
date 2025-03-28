import { StyleSheet } from 'react-native';
import { ThemedText } from '../components/themed-text';
import { CenteredScreenLayout } from './centered-screen-layout';
import { Button } from '../components/button';
import { useTranslation } from 'react-i18next';
type ErrorFetchLayoutProps = {
  error?: string;
  onRetry: () => void;
};

export const ErrorFetchLayout = ({ error, onRetry }: ErrorFetchLayoutProps) => {
  const { t } = useTranslation();
  return (
    <CenteredScreenLayout style={styles.container}>
      <ThemedText>{error || t('common.errorFetch')}</ThemedText>
      <Button
        style={styles.button}
        label={t('common.retry')}
        onPress={onRetry}
      />
    </CenteredScreenLayout>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 48
  },
  container: {
    gap: 16
  }
});
