import { toast } from 'react-toastify';

interface NotyProps {
  msg: string;
  timeout?: number;
}

export const successNoty = ({ msg = '', timeout = 5000 }: NotyProps) => {
  return toast.success(msg, {
    position: 'top-center',
    autoClose: timeout,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
  });
};

export const errorNoty = ({ msg = '', timeout = 5000 }: NotyProps) => {
  return toast.error(msg, {
    position: 'top-center',
    autoClose: timeout,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
  });
};
