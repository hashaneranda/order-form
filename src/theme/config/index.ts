import lightTheme, { ThemeType } from './light';
import darkTheme from './dark';

interface ThemeOptionsProps {
  light: ThemeType;
  dark: ThemeType;
}

interface THEME_OPTIONSProps {
  LIGHT: 'light';
  DARK: 'dark';
}

export const ThemeOptions: ThemeOptionsProps = {
  light: lightTheme,
  dark: darkTheme,
};

export const THEME_OPTIONS: THEME_OPTIONSProps = {
  LIGHT: 'light',
  DARK: 'dark',
};
