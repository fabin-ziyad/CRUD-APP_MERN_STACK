import React, { useEffect, useState } from "react";
import UserCard from "../User/UserCard";
import { FaPlus } from "react-icons/fa6";
import UserModal from "../../Modals/User";
import TextInput from "../../Fields/Input";
import Dropdown from "../../Fields/Dropdown";
import { AddUser, GetUsersList } from "../../../Actions/handlers/user";
import { storeFilter } from "../../../redux/store";

const Filters = [
  { label: "A to Z", value: "AtoZ" },
  { label: "Z to A", value: "ZtoA" },
  { label: "Last Inserted", value: "LastInserted" },
  { label: "Last Modified", value: "LastModified" },
];

const List = () => {
  const deafultFilter = localStorage.getItem("filter");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState(deafultFilter);
  const [userAdded, setUserAdded] = useState(false);
  const [userDeleted, setUserDeleted] = useState(false);
  const [userUpdated, setUserUpdated] = useState(false);
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // filter
  const handleFilter = (value) => {
    setFilter(value);
  };
  const handleDelete = async () => {
    setUserDeleted(!userDeleted)
  }
  const handleUpdate = async () => {
    setUserUpdated(!userUpdated)
  }
  useEffect(() => {
    storeFilter(filter);
    const fetchItems = async () => {
      const users = await GetUsersList(filter, search);
      if (
        users != null &&
        users !== "undefined" &&
        users !== undefined &&
        users.length > 0
      ) {
        setUsers(users);
      } else {
        setUsers([]);
      }
    };
    fetchItems();
  }, [filter, search, userAdded, userDeleted, userUpdated]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await AddUser(formData);
    setIsModalOpen(!isModalOpen);
    setUserAdded(!userAdded);
  };
  return (
    <div className="px-3">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
        <div className="w-[50%]">
          <Dropdown
            label={"Filter By"}
            options={Filters}
            value={filter}
            onChange={handleFilter}
          />
        </div>
        <div className="w-[50%]">
          <TextInput
            label={"Search By"}
            placeholder={"Name, Mobile, Email"}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="flex justify-end py-4">
        <div
          className="flex items-center gap-x-1 text-white font-semibold bg-blue-700 rounded w-fit px-2 py-1 hover:cursor-pointer"
          onClick={handleModal}
        >
          <FaPlus />
          <h2>Add User</h2>
        </div>
      </div>
      {users && users.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-6 gap-y-3">
          {users.map((user) => (
            <UserCard user={user} key={user._id} handleDelete={handleDelete} handleUpdate={handleUpdate} />
          ))}
        </div>
      ) : (
        <h2 className="text-2xl text-center ">User Not Found</h2>
      )}
      <UserModal isOpen={isModalOpen} onClose={handleModal}>
        <h1>Add a New User</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <TextInput
              type="text"
              label={"Full Name"}
              name="name"
              onChange={handleChange}
              className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
              placeholder="Enter your first name"
            />
          </div>
          <div className="mb-4">
            <TextInput
              type="email"
              label={"Email"}
              name="email"
              onChange={handleChange}
              className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <TextInput
              type="tel"
              label={"Mobile Number"}
              name="phone"
              onChange={handleChange}
              className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
              placeholder="Enter your mobile number"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add New User
            </button>
          </div>
        </form>
      </UserModal>
    </div>
  );
};

export default List;
