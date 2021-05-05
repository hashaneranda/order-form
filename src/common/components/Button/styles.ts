import styled, { css } from 'styled-components';
import { Button } from '@material-ui/core';

const baseButton = css`
  text-transform: unset;
  font-style: normal;
  font-weight: bold;
  font-size: 1.15em;
  box-shadow: 0px 0.3px 0.9px rgba(0, 0, 0, 0.1), 0px 1.6px 3.6px rgba(0, 0, 0, 0.14);
  padding: 1.6em 5em;
  font-family: ${props => props.theme.typography.body};
  &:hover {
    font-weight: bold;
  }
`;

export const PrimaryBtn = styled(Button)`
  ${baseButton};
  background-color: ${props => props.theme.palette.typography.main};
  color: ${props => props.theme.palette.background.main};
  &:hover {
    background-color: ${props => props.theme.palette.typography.secondary};
  }
`;
