import { createContext } from 'react';
import type { EffectiveTheme, Theme } from '@/lib/types';
import { emptyFn } from '@/lib/utils';
export type { Theme, EffectiveTheme };

export interface ThemeContext {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  effectiveTheme: EffectiveTheme;
}

export const ThemeContext = createContext<ThemeContext>({
  theme: 'system',
  setTheme: emptyFn,
  effectiveTheme: 'light',
});
