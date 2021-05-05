import styled from 'styled-components';

import { TextInput, Selectbox, AutoCompleteTextInput } from 'common/components/FormHelper/FormHelper';

export const Container = styled.div`
  padding: 1em 2em;
`;

export const FormWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  margin-top: 1em;

  .MuiFormControl-root {
    margin-bottom: 1em;
  }

  .MuiInputBase-root {
    color: ${props => props.theme.palette.typography.main};
  }
`;

export const TextFeild = styled(TextInput)`
  width: 100%;
  margin-bottom: 0 !important;

  .MuiFormControl-root .MuiTextField-root {
    margin-bottom: 0;
  }

  .MuiInputBase-root {
    height: 3em;
  }
`;

export const Select = styled(Selectbox)`
  width: 100%;
  margin-bottom: 0 !important;

  .MuiFormControl-root .MuiTextField-root {
    margin-bottom: 0;
  }

  .MuiInputBase-root {
    height: 3em;
  }
`;

export const AutoComplete = styled(AutoCompleteTextInput)`
  width: 100%;
  margin-bottom: 0 !important;

  .MuiFormControl-root .MuiTextField-root {
    margin-bottom: 0;
  }

  .MuiInputBase-root {
    height: 3em;
  }
`;
