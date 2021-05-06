import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

import { TextInput, Selectbox, AutoCompleteTextInput, CheckBoxes } from 'common/components/FormHelper/FormHelper';

export const Container = styled.div`
  padding: 1em 2em;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
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

export const FormSection = styled(Grid)`
  width: 60%;
  margin: 1.5em 0;

  .MuiFormControl-root {
    width: 100%;
  }

  @media (max-width: 600px) {
    width: 100%;
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

export const CheckBox = styled(CheckBoxes)`
  width: 100%;
  margin-bottom: 0 !important;
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
