import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useOutletContext } from "react-router";

export default function AllAppsTopBarComponent({ apps, setApps }) {
  const { allApps } = useOutletContext();
  const [search, setSearch] = useState("");
  useEffect(() => {
    if (search.trim() === "") {
      setApps(allApps);
    } else {
      const result = allApps.filter((app) =>
        app.title.toLowerCase().includes(search.trim().toLowerCase())
      );
      setApps(result);
    }
  }, [search, allApps, setApps]);
  return (
    <div className="flex sm:flex-row flex-col justify-between sm:items-center gap-5">
      <p className="text-lg font-bold">{apps.length} Apps Found</p>
      <label className="input h-auto py-3 px-4 sm:w-auto w-full">
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
