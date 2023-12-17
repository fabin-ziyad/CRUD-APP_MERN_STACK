import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
// import { FaEye } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
import ViewUser from "./ViewUser";
import ConfirmationDialog from "../../../utils/reusables/ConfirmBox";
import { DeleteUser } from "../../../Actions/handlers/user";
import { useNavigate } from "react-router-dom";
const UserCard = ({ user, handleDelete, handleUpdate }) => {
  const navigate=useNavigate()
  const [canView, setCanView] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  const handleView = () => {
    setCanView(!canView);
  };
  const handleConfirm = () => {
    setOpenConfirm(!openConfirm);
  };
  const handleDeleteUser = async() => {
    await DeleteUser(user._id)
    handleDelete()
  };
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4 hover:cursor-pointer" onClick={handleView} >
        <div className="flex items-center">
          <img
            src={"https://cdn-icons-png.flaticon.com/512/9131/9131529.png"}
            alt={"test"}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div className="text-left">
            <h2 className="text-lg font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-600">{user.phone}</p>
          </div>
        </div>
      </div>
      <div className="px-4 py-2 border-t border-gray-200 flex justify-end items-center gap-x-4">
        <button className="text-green-400 hover:text-green-700">
          <FaEdit size={20} onClick={()=>navigate(`/edit/${user._id}`)}/>
        </button>
        <button className="text-red-500 hover:text-red-700">
          <IoTrashBin size={21} onClick={handleConfirm} />
        </button>
      </div>
      {canView && (
        <ViewUser
          user={user}
          isModalOpen={canView}
          handleView={handleView}
        />
      )}
      {openConfirm && (
        <ConfirmationDialog
          title={"Confirmation Box"}
          message={"Are you sure to delete this User ?"}
          isOpen={openConfirm}
          onCancel={handleConfirm}
          onConfirm={handleDeleteUser}
        />
      )}
    </div>
  );
};

export default UserCard;
