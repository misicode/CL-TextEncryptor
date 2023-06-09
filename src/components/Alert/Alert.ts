import Swal, { SweetAlertIcon } from "sweetalert2";

import "./Alert.css";

export const showAlert = (title: string, html: string, icon: SweetAlertIcon, showBtn: boolean) => {
  Swal.fire({
    title: title,
    html: html,
    icon: icon,
    confirmButtonText: "OK",
    showConfirmButton: showBtn,
  });
};
