import React from 'react';
import { ButtonProps } from '@material-ui/core/Button';

// styles
import { PrimaryBtn } from './styles';

interface PrimaryButtonProps extends ButtonProps {
  loading?: boolean;
  children: React.ReactNode | React.ReactNode[];
}

export const PrimaryButton = ({ children, loading, ...props }: PrimaryButtonProps) => {
  return (
    <PrimaryBtn disabled={loading} {...props}>
      {loading ? 'Loading...' : children}
    </PrimaryBtn>
  );
};

PrimaryButton.defaultProps = {
  loading: false,
};
