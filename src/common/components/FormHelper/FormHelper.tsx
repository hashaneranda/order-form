/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';

import { FormHelperText, TextField, Select, MenuItem, InputLabel, InputAdornment } from '@material-ui/core';
import { BaseTextFieldProps } from '@material-ui/core/TextField';
import { SelectProps } from '@material-ui/core/Select';
import Autocomplete from '@material-ui/lab/Autocomplete';
import FormLabel from '@material-ui/core/FormLabel';
// import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

// styles
import { FormControler, SelectFormControl, AutoCompleteFormControl, CheckBoxControl } from './styles';

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

export const Selectbox = ({ formClass, inputError, data, labelValue, ...props }: SelectboxProps) => {
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

interface CheckBoxeProps {
  formClass?: string;
  labelValue?: string;
  onChange: (e: any, n: any) => void;
  data: Array<any>;
  values: any;
}

export const CheckBoxes = ({ data, labelValue, values, onChange }: CheckBoxeProps) => {
  return (
    <CheckBoxControl>
      <FormLabel component='legend'>{labelValue}</FormLabel>
      <FormGroup>
        {data.map((item: any, index: number) => (
          <FormControlLabel
            key={index}
            control={<Checkbox checked={values[item.name]} onChange={onChange} name={item.name} />}
            label={item.title}
          />
        ))}
      </FormGroup>
    </CheckBoxControl>
  );
};

Selectbox.defaultValue = {
  labelValue: '',
};

interface AutoCompleteTextInputProps {
  inputError?: string;
  labelValue?: string;
  noOptionsText?: string;
  data: Array<any>;
  fetchData: (e: any) => void;
  onChange: (e: any, n: any) => void;
  clearData: (e: any) => void;
  getOptionLabel: (e: any) => string;
  renderOption: (e: any) => React.ReactNode;
  placeholder?: string;
  value: any;
  disabled?: boolean;
}

export const AutoCompleteTextInput = ({
  labelValue,
  noOptionsText,
  data,
  fetchData,
  getOptionLabel,
  inputError,
  renderOption,
  placeholder,
  onChange,
  clearData,
  disabled,
  value,
  ...props
}: AutoCompleteTextInputProps): React.ReactElement => {
  const [inputValue, setInputValue] = React.useState('');

  useEffect(() => {
    let active = true;

    if (inputValue === '') {
      clearData(value ? [value] : []);
      return undefined;
    }

    if (inputValue.length > 4) fetchData(inputValue);

    return () => {
      active = false;
    };
  }, [disabled, value, inputValue]);

  return (
    <AutoCompleteFormControl error={!!inputError}>
      {!!labelValue && <InputLabel id='tags-outlined'>{labelValue}</InputLabel>}
      <Autocomplete
        autoComplete
        includeInputInList
        filterSelectedOptions
        disabled={disabled}
        noOptionsText={noOptionsText}
        id='tags-outlined'
        options={data}
        getOptionLabel={getOptionLabel}
        filterOptions={(options: any) => options}
        renderInput={params => <TextField {...params} placeholder={placeholder} />}
        renderOption={renderOption}
        onChange={onChange}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        value={value}
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
