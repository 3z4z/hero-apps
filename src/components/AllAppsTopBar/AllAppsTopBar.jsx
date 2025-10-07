import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useOutletContext } from "react-router";

export default function AllAppsTopBarComponent({ apps }) {
  const { allApps } = useOutletContext();
  const [search, setSearch] = useState("");
  console.log("search", search);

  return (
    <div className="flex justify-between items-center">
      <p className="text-lg font-bold">{apps.length} Apps Found</p>
      <label className="input h-auto py-3 px-4">
        <BiSearch className="w-5 h-5 mt-0.5 text-gray-500" />
        <input
          type="search"
          required
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>
    </div>
  );
}
