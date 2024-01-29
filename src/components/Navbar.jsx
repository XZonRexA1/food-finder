
import { useProductContext } from "../hooks/useProductContext";
import MyCart from "./MyCart";

const Navbar = () => {
  const { setSearchQuery } = useProductContext();

  const handleSearchChange = (e) => {

    setSearchQuery(e.target.value);
  };

  return (
    <div className="w-full flex items-center">
      <h1 className="text-md sm:text-2xl mx-2">Food</h1>
      <img
        src="../../images/pngegg.png"
        alt="logo"
        className=" h-12 pt-4 py-2"
      />
      <h1 className="text-md sm:text-2xl ml-2">Finder</h1>
      <hr className="border-1 border-black hidden sm:block rotate-90 w-12" />
      <div className="px-20 py-4 w-12 hidden sm:block relative z-10 h-12 my-2 bg-white rounded-md">
        <img
          src="../../images/logo.jpg"
          className="z-20 absolute w-8 h-8  rounded-md -mt-2 -ml-16 "
          alt="logo-png"
        />
      </div>

      <input
        type="text"
        placeholder="Search"
        className="w-32 h-8  sm:w-64 relative sm:h-12 mx-auto rounded-md border-none px-4 bg-white"
        onKeyUp={handleSearchChange}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="sm:w-6 sm:h-6 w-4 h-4 absolute right-[32%] sm:right-[29%]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
      <MyCart/>
      <button className="ml-2 hover:bg-gray-400 text-sm rounded-md font-semibold bg-gray-300 px-4 py-2 sm:mr-2">Login</button>
    </div>
  );
};

export default Navbar;
