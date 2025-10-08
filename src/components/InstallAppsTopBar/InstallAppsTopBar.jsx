import { toast } from "react-toastify";
import { toastSuccessConfig } from "../../configs/toastConfigs";

export default function InstallAppsTopBarComponent({
  installedApps,
  setInstalledApps,
}) {
  const sortByDownloads = (order) => {
    const sortedData = [...installedApps];
    if (order === "asc") {
      sortedData.sort((a, b) => b.downloads - a.downloads);
      toast.success(`Apps Sorted by High to Low Downloads`, toastSuccessConfig);
    }
    if (order === "desc") {
      sortedData.sort((a, b) => a.downloads - b.downloads);
      toast.success(`Apps Sorted by Low to High Downloads`, toastSuccessConfig);
    }
    setInstalledApps(sortedData);
  };
  return (
    <div className="flex sm:flex-row flex-col justify-between sm:items-center gap-5">
      <p className="text-lg font-bold">{installedApps.length} Apps Found</p>
      <div className="dropdown dropdown-end">
        <select
          onChange={(e) => sortByDownloads(e.target.value)}
          defaultValue="Sort by"
          className="select h-auto py-3 px-4 sm:w-56 w-full"
        >
          <option disabled={true}>Sort by</option>
          <option value={"asc"}>Downloads - High to Low</option>
          <option value={"desc"}>Downloads - Low to High</option>
        </select>
      </div>
    </div>
  );
}
