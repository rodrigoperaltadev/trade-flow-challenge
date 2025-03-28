import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ButtonGroup } from '../button-group';
import { useTheme } from '../../theme/use-theme';

jest.mock('../../theme/use-theme');

describe('ButtonGroup', () => {
  beforeEach(() => {
    (useTheme as jest.Mock).mockReturnValue({
      colors: {
        primary: '#000000',
        secondary: '#ffffff',
        text: '#000000',
        background: '#ffffff'
      }
    });
  });

  it('renders correctly with default props', () => {
    const buttons = ['Button 1', 'Button 2'];
    const { getByText } = render(
      <ButtonGroup
        buttons={buttons}
        selectedButton="Button 1"
        onButtonPress={jest.fn()}
      />
    );
    expect(getByText('Button 1')).toBeTruthy();
    expect(getByText('Button 2')).toBeTruthy();
  });

  it('handles button press events', () => {
    const buttons = ['Button 1', 'Button 2'];
    const onButtonPress = jest.fn();
    const { getByText } = render(
      <ButtonGroup
        buttons={buttons}
        selectedButton="Button 1"
        onButtonPress={onButtonPress}
      />
    );

    fireEvent.press(getByText('Button 2'));
    expect(onButtonPress).toHaveBeenCalledWith('Button 2');
  });

  it('renders with different variants', () => {
    const buttons = ['Primary', 'Secondary'];
    const { getByText } = render(
      <ButtonGroup
        buttons={buttons}
        selectedButton="Primary"
        onButtonPress={jest.fn()}
      />
    );
    expect(getByText('Primary')).toBeTruthy();
    expect(getByText('Secondary')).toBeTruthy();
  });

  it('renders with different sizes', () => {
    const buttons = ['Small', 'Medium', 'Large'];
    const { getByText } = render(
      <ButtonGroup
        buttons={buttons}
        selectedButton="Small"
        onButtonPress={jest.fn()}
      />
    );
    expect(getByText('Small')).toBeTruthy();
    expect(getByText('Medium')).toBeTruthy();
    expect(getByText('Large')).toBeTruthy();
  });
});
