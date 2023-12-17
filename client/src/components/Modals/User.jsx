import React from 'react';

const UserModal = ({ isOpen, onClose, modalName, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-non">
      <div className="relative w-auto max-w-3xl mx-auto my-6 lg:w-[30%] w-[95%] ">
        <div className="bg-white rounded-lg shadow-lg relative flex flex-col w-full " style={{zIndex:120}}>
          <div className="flex items-start justify-between p-5 border-b border-gray-200 rounded-t">
            <h2 className='font-semibold'>{modalName}</h2>
            <button
              onClick={onClose}
              className="absolute top-0 right-0 p-2 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="p-5">{children}</div>
        </div>
      </div>
      <div className="fixed inset-0 bg-black opacity-40" onClick={onClose}></div>
    </div>
  );
};

export default UserModal;
