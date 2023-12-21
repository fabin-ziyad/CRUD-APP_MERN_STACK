import { checkNetworkStatus } from "../../utils/checkConnectivity";
import { alertActions } from "../../utils/reusables/alertAction";
import { Login, Register } from "../controllers/authController";

export const RegisterUser = async (data) => {
  try {
    if (checkNetworkStatus()) {
      const registerUser = await Register(data);
      if (registerUser.status) {
        alertActions.success(registerUser.message);
      } else {
        alertActions.error(registerUser.message);
      }
    } else {
      alertActions.warning("No network Avilable");
    }
  } catch (error) {
    alertActions.error(error.response.data.message);
  }
};
export const LoginUser = async (data) => {
  try {
    const loginUser = await Login(data);
    if (loginUser.success) {
      alertActions.success(loginUser.message);
      const token = loginUser.token;
      if (token !== null) {
        localStorage.setItem("userToken", token);
      }
      return true;
    } else {
      alertActions.error(loginUser.message);
    }
  } catch (error) {
    alertActions.error(error.response.data.message);
  }
};
