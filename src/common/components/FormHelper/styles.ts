import styled from 'styled-components';
import { FormControl } from '@material-ui/core';

export const FormControler = styled(FormControl)`
  .MuiInputBase-input,
  .MuiFormLabel-root {
    font-family: ${props => props.theme.typography.body};
    color: ${props => props.theme.palette.typography.main};
  }

  .MuiFormLabel-root {
    color: ${props => props.theme.palette.typography.secondary};
  }
  .MuiOutlinedInput-notchedOutline {
    border-color: ${props => props.theme.palette.typography.lighter};
    border-radius: 8px;
  }

  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${props => props.theme.palette.typography.main};
  }
  .MuiFormLabel-root.Mui-focused {
    color: ${props => props.theme.palette.typography.main};
  }
`;

export const SelectFormControl = styled(FormControl)`
  .MuiInputBase-input,
  .MuiFormLabel-root {
    font-family: ${props => props.theme.typography.body};
  }

  .MuiFormLabel-root {
    color: ${props => props.theme.palette.typography.secondary};
  }
  .MuiOutlinedInput-notchedOutline {
    border-color: ${props => props.theme.palette.typography.lighter};
    border-radius: 8px;
  }

  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${props => props.theme.palette.typography.main};
  }
  .MuiFormLabel-root.Mui-focused {
    color: ${props => props.theme.palette.typography.main};
  }

  .MuiSelect-select:focus {
    background-color: unset;
  }

  .MuiSelect-icon {
    color: ${props => props.theme.palette.typography.secondary};
  }
`;

export const AutoCompleteFormControl = styled(FormControl)`
  .MuiInputBase-input,
  .MuiFormLabel-root {
    font-family: ${props => props.theme.typography.body};
  }

  .MuiFormLabel-root {
    color: ${props => props.theme.palette.typography.secondary};
  }
  .MuiOutlinedInput-notchedOutline {
    border-color: ${props => props.theme.palette.typography.lighter};
    border-radius: 8px;
  }

  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${props => props.theme.palette.typography.main};
  }
  .MuiFormLabel-root.Mui-focused {
    color: ${props => props.theme.palette.typography.main};
  }

  .MuiSelect-select:focus {
    background-color: unset;
  }

  .MuiIconButton-root {
    color: ${props => props.theme.palette.typography.secondary};
  }

  .MuiAutocomplete-popper {
    background: ${props => props.theme.palette.background.main};
    color: ${props => props.theme.palette.typography.secondary};
  }
`;

export const CheckBoxControl = styled(FormControl)`
  .MuiInputBase-input,
  .MuiFormLabel-root {
    font-family: ${props => props.theme.typography.body};
  }

  .MuiFormLabel-root {
    color: ${props => props.theme.palette.typography.secondary};
  }

  .MuiCheckbox-root {
    color: ${props => props.theme.palette.typography.secondary};
  }

  .MuiIconButton-colorSecondary:hover {
    background-color: ${props => props.theme.palette.typography.lighter};
  }

  .MuiFormGroup-root {
    flex-direction: row;
    margin-top: 2em;
    gap: 6em;
  }
`;
