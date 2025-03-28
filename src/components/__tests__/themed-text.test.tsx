import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemedText } from '../themed-text';
import { useTheme } from '../../theme/use-theme';

// Mock the theme hook
jest.mock('../../theme/use-theme', () => ({
  useTheme: jest.fn()
}));

describe('ThemedText', () => {
  beforeEach(() => {
    (useTheme as jest.Mock).mockReturnValue({
      colors: {
        primary: '#007AFF',
        background: '#FFFFFF',
        text: '#000000'
      },
      typography: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '400'
      }
    });
  });

  it('renders correctly with default props', () => {
    const { getByText } = render(<ThemedText>Test Text</ThemedText>);
    expect(getByText('Test Text')).toBeTruthy();
  });

  it('renders with custom style', () => {
    const customStyle = { color: 'red' };
    const { getByText } = render(
      <ThemedText style={customStyle}>Styled Text</ThemedText>
    );
    expect(getByText('Styled Text')).toBeTruthy();
  });

  it('renders with different variants', () => {
    const { getByText: getPrimary } = render(
      <ThemedText type="info">Primary Text</ThemedText>
    );
    const { getByText: getSecondary } = render(
      <ThemedText type="info">Secondary Text</ThemedText>
    );

    expect(getPrimary('Primary Text')).toBeTruthy();
    expect(getSecondary('Secondary Text')).toBeTruthy();
  });

  it('renders with different sizes', () => {
    const { getByText: getSmall } = render(
      <ThemedText size={8}>Small Text</ThemedText>
    );
    const { getByText: getMedium } = render(
      <ThemedText size={12}>Medium Text</ThemedText>
    );
    const { getByText: getLarge } = render(
      <ThemedText size={20}>Large Text</ThemedText>
    );

    expect(getSmall('Small Text')).toBeTruthy();
    expect(getMedium('Medium Text')).toBeTruthy();
    expect(getLarge('Large Text')).toBeTruthy();
  });
});
