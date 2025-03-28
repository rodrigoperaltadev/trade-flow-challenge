interface Theme {
  colors: {
    primary: string;
    background: string;
    text: string;
  };
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  typography: {
    fontSize: number;
    lineHeight: number;
    fontWeight: string;
  };
}

export const useTheme = (): Theme => {
  return {
    colors: {
      primary: '#007AFF',
      background: '#FFFFFF',
      text: '#000000'
    },
    spacing: {
      xs: 4,
      sm: 8,
      md: 16,
      lg: 24,
      xl: 32
    },
    typography: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: '400'
    }
  };
};
