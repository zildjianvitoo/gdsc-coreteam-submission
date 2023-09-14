import { AiOutlineSearch } from "react-icons/ai";

function SearchBar() {
  return (
    <div className="w-full">
      <div className="flex gap-3 bg-white p-2 rounded-lg items-center w-full">
        <div className="w-4 h-4 text-gray-400">
          <AiOutlineSearch className="w-full" />
        </div>
        <input
          type="text"
          placeholder="Cari"
          onChange={(e) => console.log(e.target.value)}
          className="bg-transparent outline-none w-full text-[14px] text-black"
        />
      </div>
    </div>
  );
}

export default SearchBar;
