import { checkNetworkStatus } from "../../utils/checkConnectivity";
import { alertActions } from "../../utils/reusables/alertAction";
import {
  getUsers,
  createUser,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/userController";

export const GetUsersList = async (filter, search) => {
  try {
    if (checkNetworkStatus()) {
      const usersList = await getUsers(filter, search);
      if (usersList.success) {
        return usersList.data;
      } else {
        alertActions.error(usersList.message);
      }
    } else {
      alertActions.warning("No network, Please connect...");
    }
  } catch (error) {
    alertActions.error("Unable to find user");
  }
};

export const AddUser = async (data) => {
  try {
    if (checkNetworkStatus()) {
      const createdUser = await createUser(data);
      if (createdUser.success) {
        alertActions.success(createdUser.message);
        return createdUser.data;
      } else {
        alertActions.error(createdUser.message);
      }
    } else {
      alertActions.warning("No network, Please connect...");
    }
  } catch (error) {
    alertActions.error("Unable to find user");
  }
};
export const DeleteUser = async (id) => {
  try {
    if (checkNetworkStatus()) {
      const createdUser = await deleteUser(id);
      if (createdUser.success) {
        alertActions.success(createdUser.message);
      } else {
        alertActions.error(createdUser.message);
      }
    } else {
      alertActions.warning("No network, Please connect...");
    }
  } catch (error) {
    alertActions.error("Unable to find user");
  }
};
export const UpdateUser = async (id, data) => {
  try {
    if (checkNetworkStatus()) {
      const updatedUser = await updateUser(id, data);
      if (updatedUser.success) {
        alertActions.success(updatedUser.message);
        return updatedUser.success;
      } else {
        alertActions.error(updatedUser.message);
      }
    } else {
      alertActions.warning("No network, Please connect...");
    }
  } catch (error) {
    alertActions.error("Unable to find user");
  }
};
export const GetUserData = async (id) => {
  try {
    if (checkNetworkStatus()) {
      const fetchedUser = await getUser(id);
      if (fetchedUser.success) {
        alertActions.success(fetchedUser.message);
        return fetchedUser.data;
      } else {
        alertActions.error(fetchedUser.message);
      }
    } else {
      alertActions.warning("No network, Please connect...");
    }
  } catch (error) {
    alertActions.error("Unable to find user");
  }
};
