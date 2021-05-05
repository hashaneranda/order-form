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
