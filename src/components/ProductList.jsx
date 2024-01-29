import { useProductContext } from '../hooks/useProductContext';
import { useState } from 'react';
import MyCart from './MyCart';

const ProductList = () => {
  const { data, searchQuery, selectedCategory } = useProductContext();
  const [cartItems, setCartItems] = useState([]); // State to keep track of cart items

  // Filter data based on the selected category and search query
  const filteredData = data
    .filter((category) => (selectedCategory ? category.title === selectedCategory.title : true))
    .flatMap((category) =>
      category.catalog.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );

  // Function to handle adding item to the cart
  const handleAddToCart = (item) => {
    // Check if the item is already in the cart based on the name
    const existingItem = cartItems.find((cartItem) => cartItem.name === item.name);

    if (existingItem) {
      // If the item is already in the cart, increase its quantity
      const updatedCart = cartItems.map((cartItem) =>
        cartItem.name === item.name ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      setCartItems(updatedCart);
    } else {
      // If the item is not in the cart, add it with quantity 1
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid sm:grid-cols-4 gap-4 mb-8 sm:w-[850px] h-full">
        {filteredData.map((item, index) => (
          <div key={index}>
            <div className="bg-white grid py-2 px-4 rounded-md">
              <img
                className="w-72 h-[250px] mx-auto"
                src={item.image}
                alt={item.name}
              />

              <p className="font-semibold mt-2 text-2xl">{item.price}</p>
              <p className="text-xl font-sans border-1 rounded-md">{item.name}</p>
              <div className="flex items-center justify-center mt-2">
                {cartItems.find((cartItem) => cartItem.name === item.name) ? (
                  <>
                    <button
                      className="bg-gray-200 hover:bg-gray-300 rounded-md py-2 px-4"
                      onClick={() => handleAddToCart(item)}
                    >
                      -
                    </button>
                    <span className="mx-2">
                      {cartItems.find((cartItem) => cartItem.name === item.name).quantity}
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

      {/* Pass cartItems to your cart component */}
      <MyCart cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  );
};

export default ProductList;
