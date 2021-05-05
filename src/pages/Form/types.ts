export interface SelectProps {
  key: string;
  value: string;
}

export interface Items {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  data?: Array<SelectProps>;
}

export interface InitialData {
  [index: string]: string | (string & Date) | undefined;
}
