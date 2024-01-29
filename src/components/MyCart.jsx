import { useState, useEffect } from "react";

const cartFromLocalStorage = JSON.parse(localStorage?.getItem("cart")) || "[]";

const MyCart = ({ cartItems }) => {
  const [cartData, setCartData] = useState(cartFromLocalStorage);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems))
  }, [cartItems]);

  const removeFromCart = (index) => {
    const updatedCart = [...cartData];
    updatedCart.splice(index, 1);
    setCartData(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };
  return (
    <div>
      <div className="relative -ml-8">
        <button onClick={openModal} className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </button>

        {cartData?.length > 0 && (
          <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
            {cartData?.length}
          </div>
        )}
      </div>


      {isModalOpen && cartData?.length > 0 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-[400px] max-w-md mx-auto my-6">
            <div className="relative flex flex-col w-full bg-white border-gray-300 rounded-xl shadow-lg">
              <div className="flex items-start justify-between p-5">
                <h2 className="text-2xl font-semibold text-black">
                  Shopping Cart
                </h2>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700"
                >
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
              <div className="p-6">
                <ul>
                  {cartData.map((item, index) => (
                    <li key={index} className="mb-4">
                      <div className="flex justify-center items-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-24 h-full object-cover rounded-md mr-4"
                        />
                        <div className="">
                          <p className="font-semibold">{item.name}</p>
                          <p className="text-gray-500">
                            Price: {item.price} x {item.quantity} ={" "}
                            {item.totalPrice.toFixed(2)}
                          </p>
                          <button
                            onClick={() => removeFromCart(index)}
                            className="text-red-500  hover:text-red-700"
                          >
                            <svg
                              className="w-5 h-5"
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
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      {isModalOpen && cartData?.length === 0 && closeModal()}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black opacity-25"></div>
      )}
    </div>
  );
};
export default MyCart;
