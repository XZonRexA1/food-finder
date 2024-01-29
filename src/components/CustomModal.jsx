

const CustomModal = ({ isOpen, onClose, modalContent }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed  inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-[400px] max-w-md mx-auto my-6">
            <div className="relative flex flex-col w-full bg-white border-gray-300 rounded-xl shadow-lg">
              <div className="flex items-start justify-between p-5">
              <h2 className="text-2xl font-semibold text-black">
            Delivery information
            </h2>
                <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              <div className="p-6">{modalContent}</div>
            </div>
          </div>
        </div>
      )}
      {isOpen && (
        <div className="fixed inset-0 bg-black opacity-25"></div>
      )}
    </>
  );
};

export default CustomModal;
