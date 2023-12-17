import { toast } from "react-toastify";
import { alertConstants } from "../constants/alertConstant";

function getPosition(placement) {
  let position = toast.POSITION.TOP_CENTER;
  switch (placement) {
    case "top-center":
      position = toast.POSITION.TOP_CENTER;
      break;
    case "top-left":
      position = toast.POSITION.TOP_LEFT;
      break;
    case "top-right":
      position = toast.POSITION.TOP_RIGHT;
      break;
    case "bottom-left":
      position = toast.POSITION.BOTTOM_LEFT;
      break;
    case "bottom-right":
      position = toast.POSITION.BOTTOM_RIGHT;
      break;
    default:
      position = toast.POSITION.TOP_CENTER;
  }
  return position;
}

function success(message, placement = "top-center") {
  if (!message) return;
  toast.dismiss(message);
  toast.success(message, {
    position: getPosition(placement),
    toastId: message,
  });
  return { type: alertConstants.OK, message };
}

function warning(message, placement = "top-center") {
  if (!message) return;
  toast.dismiss(message);
  toast.warning(message, {
    position: getPosition(placement),
    toastId: message
  });
  return { type: alertConstants.WARNING, message };
}

function error(message, placement = "top-center") {
  if (!message) return;
  toast.dismiss(message);
  toast.error(message, {
    position: getPosition(placement),
    toastId: message
  });
  return { type: alertConstants.ERROR, message };
}

function clear() {
  toast.dismiss();
  return { type: alertConstants.CLEAR };
}

export const alertActions = {
  success,
  error,
  warning,
  clear
};
