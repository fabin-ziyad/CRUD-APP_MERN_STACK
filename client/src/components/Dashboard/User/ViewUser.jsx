import React from "react";

import UserModal from "../../Modals/User";
import { formatLetter } from "../../../utils/capitalize";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ViewUser = ({ user, isModalOpen, handleView }) => {
  return (
    <UserModal
      isOpen={isModalOpen}
      onClose={handleView}
      modalName={"User Details"}
    >
      <div className="w-full">
        <div className="">
          <div className="flex justify-center">
            <img
              src={"https://cdn-icons-png.flaticon.com/512/9131/9131529.png"}
              alt={"test"}
              className="w-20 h-20 rounded-full object-cover"
            />
          </div>
          <div className="text-center my-3 py-2">
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <div className="flex justify-center mt-1">
              <h2 className=" rounded px-2 bg-gray-400 font-semibold text-center text-white">
                {user.city || "Not"}, {user.state || "Available"}
                {/* Some user haven't state and city because as per the
                 rules only email,name,phone field should have in add user but in
                 registration user should have this,thats why  */}
              </h2>
            </div>
          </div>
          <div className="flex items-center gap-1 my-2">
            <MdEmail size={22} className="text-gray-400" />
            <p className="text-gray-600 text-lg">{formatLetter(user.email)}</p>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-1">
              <FaPhoneAlt size={20} className="text-gray-400" />
              <p className="text-gray-600 text-lg">{user.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </UserModal>
  );
};

export default ViewUser;
