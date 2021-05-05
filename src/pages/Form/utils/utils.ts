// types
import { CheckItem, IsChecked } from '../types';

export const phoneRegex = RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);

export const mockEvent = (name: string, value: any) => {
  return {
    persist: () => null,
    target: {
      type: 'change',
      name: name,
      value: value,
    },
  };
};

export const mapDataToSelect = (array: Array<any>, key: string, value: string) => {
  return array ? array?.map((x: any) => ({ key: x[key], value: x[value] })) : [];
};

export const generateIsChecked = (targets: Array<CheckItem>, values: any): IsChecked => {
  let result = {};
  targets.map((checkItem: CheckItem) => {
    result = { ...result, [checkItem.name]: values[checkItem.name] };
  });
  return result;
};
