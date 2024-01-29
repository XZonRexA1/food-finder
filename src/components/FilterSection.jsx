
import { useProductContext } from '../hooks/useProductContext';

const FilterSection = () => {
  const { data, setSelectedCategory, selectedCategory } = useProductContext();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <h3 className='text-2xl mt-16 font-bold mb-8'>Category</h3>
     
      <div className='flex flex-col items-start ml-2 text-md sm:text-xl gap-y-4'>
        {data.map((category, index) => (
          <button
            key={index}
            className={selectedCategory === category ? 'bg-gray-200 px-2 py-2 rounded-md font-semibold' : 'hover:bg-gray-200 px-2 py-2 rounded-md'} 
            
            onClick={() => handleCategoryClick(category)}
          >
            {category.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterSection;
