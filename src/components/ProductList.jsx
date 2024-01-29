import { useProductContext } from "../hooks/useProductContext";
import { useState } from "react";
import MyCart from "./MyCart";

const ProductList = () => {
  const { data, searchQuery, selectedCategory } = useProductContext();
  const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart")) || [];
  const [cartItems, setCartItems] = useState(cartFromLocalStorage);

  const filteredData = data
    .filter((category) =>
      selectedCategory ? category.title === selectedCategory.title : true
    )
    .flatMap((category) =>
      category.catalog.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );

  const handleAddToCart = (item) => {
    const existingItem = cartItems.find(
      (cartItem) => cartItem.name === item.name
    );

    if (existingItem) {
      const updatedCart = cartItems.map((cartItem) =>
        cartItem.name === item.name
          ? {
              ...cartItem,
              quantity: cartItem.quantity + 1,
              totalPrice: (cartItem.quantity + 1) * item.price,
            }
          : cartItem
      );
      setCartItems(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      const updatedCart = [
        ...cartItems,
        { ...item, quantity: 1, totalPrice: item.price },
      ];
      setCartItems(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  const handleDecreaseQuantity = (item) => {
    const existingItem = cartItems.find(
      (cartItem) => cartItem.name === item.name
    );

    if (existingItem && existingItem.quantity > 0) {
      const updatedCart = cartItems.map((cartItem) =>
        cartItem.name === item.name
          ? {
              ...cartItem,
              quantity: cartItem.quantity - 1,
              totalPrice: (cartItem.quantity - 1) * item.price,
            }
          : cartItem
      );
      setCartItems(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid sm:grid-cols-4 gap-4 mb-8 sm:w-[850px]  sm:h-full">
        {filteredData.map((item, index) => (
          <div key={index}>
            <div className="bg-white mr-4 sm:mr-0 grid py-2 px-4 rounded-md">
              <img
                className="w-72 h-[250px] mx-auto"
                src={item.image}
                alt={item.name}
              />

              <p className="font-semibold mt-2 text-2xl">{item.price}</p>
              <p className="text-xl font-sans border-1 rounded-md">
                {item.name}
              </p>
              <div className="flex items-center justify-center mt-2">
                {cartItems.find((cartItem) => cartItem.name === item.name) ? (
                  <>
                    <button
                      className="bg-gray-200 hover:bg-gray-300 rounded-md py-2 px-4"
                      onClick={() => handleDecreaseQuantity(item)}
                    >
                      -
                    </button>
                    <span className="mx-2">
                      {
                        cartItems.find(
                          (cartItem) => cartItem.name === item.name
                        ).quantity
                      }
                    </span>
                    <button
                      className="bg-gray-200 hover:bg-gray-300 rounded-md py-2 px-4"
                      onClick={() => handleAddToCart(item)}
                    >
                      +
                    </button>
                  </>
                ) : (
                  <button
                    className="bg-gray-200 hover:bg-gray-300 rounded-md py-2 px-8"
                    onClick={() => handleAddToCart(item)}
                  >
                    +
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <MyCart cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  );
};

export default ProductList;
