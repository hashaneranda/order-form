import { GridSize } from '@material-ui/core/Grid';

export interface SelectProps {
  key: string;
  value: string;
}
interface SizeProp {
  lg: GridSize;
  md: GridSize;
  sm: GridSize;
}

export interface FormItem {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  data?: Array<SelectProps>;
  size?: SizeProp;
}

export interface Items {
  title: string;
  data: Array<FormItem>;
}

export interface InitialData {
  [index: string]: string | (string & Date) | undefined | boolean;
}

export interface CheckItem {
  name: string;
  title: string;
}

export interface IsChecked {
  [index: string]: boolean;
}
