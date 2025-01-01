import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <div className="bg-white flex items-center justify-between px-6 pt-2 drop-shadow-md">
      <div className="text-2xl tracking-wider font-medium text-black py-2">
        Task
      </div>
      <SearchBar />
      <div className="w-9 h-9 rounded-full bg-slate-300 flex items-center justify-center">
        P
      </div>
    </div>
  );
}
