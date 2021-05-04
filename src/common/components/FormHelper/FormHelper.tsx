import React, { useEffect } from 'react';

import { FormHelperText, TextField, Select, MenuItem, InputLabel, InputAdornment } from '@material-ui/core';
import { BaseTextFieldProps } from '@material-ui/core/TextField';
import { SelectProps } from '@material-ui/core/Select';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';

// styles
import { FormControler, SelectFormControl, AutoCompleteFormControl } from './styles';

interface TextInputProps extends BaseTextFieldProps {
  formClass?: string;
  inputError?: string;
  onChange: (e: any) => void;
  onBlur?: (e: any) => void;
  startAdorment?: JSX.Element;
  endAdorment?: JSX.Element;
}

export const TextInput = ({ formClass, inputError, startAdorment, endAdorment, onChange, ...props }: TextInputProps) => {
  return (
    <FormControler className={formClass} error={!!inputError}>
      <TextField
        id='outlined-basic'
        error={!!inputError}
        onChange={(e: React.ChangeEvent<any>) => onChange(e)}
        InputProps={{
          startAdornment: startAdorment && <InputAdornment position='start'>{startAdorment}</InputAdornment>,
          endAdornment: endAdorment && <InputAdornment position='end'>{endAdorment}</InputAdornment>,
        }}
        {...props}
      />
      <FormHelperText className='defaultHellperTxt'>{inputError ? inputError : ''}</FormHelperText>
    </FormControler>
  );
};

type DataItem = { key: any; value: string };

interface SelectboxProps extends SelectProps {
  formClass?: string;
  inputError?: string;
  labelValue?: string;
  data: Array<DataItem>;
}

export const Selectbox = ({ formClass, inputError, data, variant, labelValue, ...props }: SelectboxProps) => {
  return (
    <SelectFormControl className={formClass} error={!!inputError}>
      {!!labelValue && <InputLabel id='demo-simple-select-outlined-label'>{labelValue}</InputLabel>}
      <Select
        labelId='demo-simple-select-outlined-label'
        id='demo-simple-select-outlined'
        error={!!inputError}
        label={labelValue}
        {...props}
      >
        {data.map((item: DataItem) => (
          <MenuItem key={item.key} value={item.key}>
            {item.value}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText className='defaultHellperTxt'>{inputError ? inputError : ''}</FormHelperText>
    </SelectFormControl>
  );
};

Selectbox.defaultValue = {
  labelValue: '',
};

interface AutoCompleteTextInputProps {
  formClass?: string;
  inputError?: string;
  labelValue?: string;
  data: Array<any>;
  fetchData: (e: any) => void;
  renderOption: (e: any) => React.ReactNode;
  fetchFlag?: boolean;
  optionName: string;
}

export const AutoCompleteTextInput = ({
  labelValue,
  formClass,
  data,
  fetchData,
  fetchFlag,
  inputError,
  optionName,
  renderOption,
  ...props
}: AutoCompleteTextInputProps): React.ReactElement => {
  const filter = createFilterOptions();

  const [open, setOpen] = React.useState(false);
  const loading = open && data.length === 0 && fetchFlag;

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    fetchData(null);

    return () => {
      active = false;
    };
  }, [loading]);

  return (
    <AutoCompleteFormControl error={!!inputError}>
      {!!labelValue && <InputLabel id='tags-outlined'>{labelValue}</InputLabel>}
      <Autocomplete
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        multiple
        id='tags-outlined'
        options={data}
        getOptionLabel={(option: any) => option[optionName]}
        filterSelectedOptions
        filterOptions={(options, params: any) => {
          const filtered: any = filter(options, params);

          return filtered;
        }}
        renderInput={params => <TextField {...params} variant='outlined' placeholder={`${labelValue} values`} />}
        renderOption={renderOption}
        {...props}
      />
      <FormHelperText className='defaultHellperTxt'>{inputError ? inputError : ''}</FormHelperText>
    </AutoCompleteFormControl>
  );
};

AutoCompleteTextInput.defaultValue = {
  fetchData: () => null,
  fetchFlag: true,
  optionName: 'name',
};
