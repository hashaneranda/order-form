import React from 'react';
import { ThemeProvider } from './themeContext';
import { ThemeOptions, THEME_OPTIONS } from './config';
import { ThemeType } from './config/light';
import usePeristedState from 'common/utils/usePersistedState';

export interface InitialState {
  theme: ThemeType;
  selectedTheme: string;
}

type ACTIONTYPE = { type: 'light'; payload: unknown } | { type: 'dark'; payload: unknown };

const ThemeSwitcher = (props: { children: React.ReactNode | React.ReactNode[] }): JSX.Element => {
  const [theme, setTheme] = usePeristedState<'light' | 'dark'>('theme_order_test', THEME_OPTIONS.DARK);

  const mapThemeData = (themeData: 'light' | 'dark') => {
    setTheme(themeData);
    return themeData;
  };

  const initialState: InitialState = {
    theme: theme ? ThemeOptions[theme] : ThemeOptions.light,
    selectedTheme: theme || 'light',
  };

  const reducer = (state: InitialState, action: ACTIONTYPE) => {
    switch (action.type) {
      case THEME_OPTIONS.DARK:
        return {
          ...state,
          theme: ThemeOptions[THEME_OPTIONS.DARK],
          selectedTheme: mapThemeData(THEME_OPTIONS.DARK),
        };
      case THEME_OPTIONS.LIGHT:
        return {
          ...state,
          theme: ThemeOptions[THEME_OPTIONS.LIGHT],
          selectedTheme: mapThemeData(THEME_OPTIONS.LIGHT),
        };
      default:
        return state;
    }
  };
  return (
    <ThemeProvider initialState={initialState} reducer={reducer}>
      {props.children}
    </ThemeProvider>
  );
};

export default ThemeSwitcher;
