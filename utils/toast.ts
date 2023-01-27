import { toast } from "react-toastify";

export const toastOK = () =>
  toast("Solicitud enviada", {
    hideProgressBar: true,
    autoClose: 3000,
    type: "success",
    position: "bottom-center",
  });

  export const toastError = () =>
  toast("Algo salio Mal", {
    hideProgressBar: true,
    autoClose: 3000,
    type: "error",
    position: "bottom-right",
  });