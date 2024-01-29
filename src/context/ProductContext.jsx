import { useState, useEffect, createContext } from 'react';
import axios from 'axios';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const apiUrl = "../../data.json";

    axios.get(apiUrl)
      .then(res => {
        setData(res.data);
      })
      .catch(error => {
        // Handle errors
        console.error('Error fetching data:', error);
      });
  }, []); 

  // Sorting logic
  const sortData = (sortOption) => {
    const sortedData = [...data];

    if (sortOption === 'high') {
      sortedData.forEach(category => {
        category.catalog.sort((a, b) => b.price - a.price);
      });
    } else if (sortOption === 'low') {
      sortedData.forEach(category => {
        category.catalog.sort((a, b) => a.price - b.price);
      });
    }

    setData(sortedData);
  };

  const value = {
    data,
    sortData,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, ProductContext };
