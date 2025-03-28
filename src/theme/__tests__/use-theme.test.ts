import { renderHook } from '@testing-library/react-hooks';
import { useTheme } from '../use-theme';

describe('useTheme', () => {
  it('returns theme object with correct structure', () => {
    const { result } = renderHook(() => useTheme());

    expect(result.current).toBeDefined();
    expect(result.current.colors).toBeDefined();
    expect(result.current.spacing).toBeDefined();
    expect(result.current.typography).toBeDefined();
  });

  it('returns correct color values', () => {
    const { result } = renderHook(() => useTheme());

    expect(result.current.colors.primary).toBe('#007AFF');
    expect(result.current.colors.background).toBe('#FFFFFF');
    expect(result.current.colors.text).toBe('#000000');
  });

  it('returns correct spacing values', () => {
    const { result } = renderHook(() => useTheme());

    expect(result.current.spacing.xs).toBe(4);
    expect(result.current.spacing.sm).toBe(8);
    expect(result.current.spacing.md).toBe(16);
    expect(result.current.spacing.lg).toBe(24);
    expect(result.current.spacing.xl).toBe(32);
  });

  it('returns correct typography values', () => {
    const { result } = renderHook(() => useTheme());

    expect(result.current.typography.fontSize).toBe(16);
    expect(result.current.typography.lineHeight).toBe(24);
    expect(result.current.typography.fontWeight).toBe('400');
  });
});
