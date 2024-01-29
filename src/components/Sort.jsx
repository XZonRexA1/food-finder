
import { useProductContext } from "../hooks/useProductContext";

const Sort = () => {
  const { sortData } = useProductContext();

  const handleSortChange = (e) => {
    const selectedSortOption = e.target.value;
    sortData(selectedSortOption);
  };

  return (
    <div className="mb-8">
      <form action="#">
        <label htmlFor="sort"></label>
        <select
          name="sort"
          id="sort"
          className="px-2 w-24 sm:w-full sm:text-md font-semibold font-sans py-2 rounded-md border-none bg-white"
          onChange={handleSortChange}
        >
          <option className="rounded-md" value="high">
            Most expensive first
          </option>
          <option className="rounded-md" value="low">
            Least expensive first
          </option>
        </select>
      </form>
    </div>
  );
};

export default Sort;
