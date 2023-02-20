import { toast } from "react-toastify";
export const toastError = (msg: string) => {
  toast.error(msg, {
    position: 'bottom-right',
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    className: 'submit-feedback success toast-setting',
    toastId: 'notifyToast'
  });
}
export const toastSuccess = (msg: string) => {
  toast.success(msg, {
    position: 'bottom-right',
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    className: 'submit-feedback success toast-setting',
    toastId: 'notifyToast',
  });
};
export const toastInfo = (msg: string) => {
  toast.info(msg, {
    position: 'bottom-right',
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    className: 'submit-feedback info toast-setting',
    toastId: 'notifyToast',
  });
}