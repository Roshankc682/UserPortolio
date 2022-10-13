import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const successToast = (message) => {
  const success = toast.success(message, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    theme: "colored",
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
  });
  return success;
};

export const errorToast = (message) => {
  const error = toast.error(message, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  return error;
};
