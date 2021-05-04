import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { InitialState } from './themeSwitcher';

interface AppContextInterface extends InitialState {
  dispatch: any;
}

export const ThemeContext = createContext<AppContextInterface | any>({});

interface Props {
  reducer: any;
  initialState: any;
  children: ReactNode | ReactNode[];
}

export const ThemeProvider = ({ reducer, initialState, children }: Props) => (
  <ThemeContext.Provider value={useReducer(reducer, initialState)}>{children}</ThemeContext.Provider>
);

export const useThemeValue = () => useContext(ThemeContext);
