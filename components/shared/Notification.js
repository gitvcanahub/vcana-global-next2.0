import { toast } from "react-toastify";
import renderHTML from "@/helpers/renderHTML";

export const Notification = (type, message) => {
  toast(renderHTML(message), {
    position: "top-center",
    autoClose: 3000,
    // hideProgressBar: true,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    type: type,

    style: { backgroundColor: type === "error" ? "" : "" },
  });
};
