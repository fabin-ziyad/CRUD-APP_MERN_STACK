import React from "react";

const ConfirmationDialog = ({
  isOpen,
  title,
  message,
  onCancel,
  onConfirm,
}) => {

  if (!isOpen) {
    return null;
  }

  return (
    <div className="confirmation-dialog fixed inset-0 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-non">
      <div className="relative w-auto max-w-3xl mx-auto my-6 lg:w-[40%] w-[95%] border">
        <div
          className="bg-white rounded-lg shadow-2xl relative w-full"
          style={{ zIndex: 120 }}
        >
          <div className="flex items-start px-4 py-2 font-semibold border-b border-gray-200 rounded-t">
            <h2>{title}</h2>
          </div>
          <hr />
          <div>
            <p className="my-2 text-xl">{message}</p>
            <div className="flex justify-center gap-8 my-2 py-3">
              <button onClick={onCancel} className="bg-black text-white px-3 py-2 rounded">Cancel</button>
              <button onClick={onConfirm} className="bg-green-400 text-white px-3 py-2 rounded">Confirm</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;
