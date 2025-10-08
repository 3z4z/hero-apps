import { Bounce } from "react-toastify";

export const toastSuccessConfig = {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: false,
  draggable: false,
  progress: undefined,
  theme: "colored",
  pauseOnFocusLoss: false,
  transition: Bounce,
};
export const toastErrorConfig = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: false,
  progress: undefined,
  theme: "colored",
  pauseOnFocusLoss: false,
  transition: Bounce,
};
