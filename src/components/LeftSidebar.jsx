import { useState } from "react";
import CustomModal from "./CustomModal";
import FilterSection from "./FilterSection";
import Sort from "./Sort";
import ProductList from "./ProductList";

const LeftSidebar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div className="pl-12 pt-4  bg-gray-100 w-full">
      <button
        className="text-2xl font-semibold text-gray-800 cursor-pointer"
        onClick={openModal}
      >
        Delivery
      </button>
      <p className="flex font-semibold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        15 - 35 min
      </p>

      <p className="flex font-semibold">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
          />
        </svg>
        free on first order 1000
      </p>
      <p className="text-md font-semibold">Service fee 149₸</p>
      <button
        className="text-md font-semibold hover:text-red-500 cursor-pointer"
        onClick={openModal}
      >
        About Delivery
      </button>
      {/* Catalog */}
      <div className="grid grid-cols-2 max-w-md sm:max-w-xl">
        <div>
          <FilterSection  />       
        </div>

        <section className="product---sort">
          <div className="sort-filter">
            <Sort />
          </div>
          <div className="container mr-44">
            <ProductList  />
          </div>
        </section>
      </div>
      {/* Custom Modal */}
      <CustomModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        modalContent={
          <>
            <div>
              <p className="font-semibold">Store address</p>{" "}
              <p className="mb-8">Almaty, street Alibi Zhangeldina, 193</p>{" "}
              <p className="font-semibold">Price</p>
              <p>Lower price for each ₸ in your cart</p>{" "}
              <hr className="border-1 mt-2" />
              <div className="flex  justify-between">
                <p>Order over ₸4050 </p>
                <p>₸0</p>
              </div>
              <hr className="border-1 mt-2" />
              <div className="flex justify-between">
                <p>Order from ₸27000 </p>
                <p>₸0</p>
              </div>
              <p className="font-semibold mt-8">Details</p>
              <div className="flex  justify-between">
                <p>Max order price </p>
                <p>50000 ₸</p>
              </div>
                <hr className="border-1" />
              <div className="flex  justify-between">
                <p>Max order weight</p>
                <p>30 kg</p>
              </div>
              <p className="mt-8">Delivery by Yandex Eats partners</p>
            </div>
          </>
        }
      />
    </div>
  );
};

export default LeftSidebar;
