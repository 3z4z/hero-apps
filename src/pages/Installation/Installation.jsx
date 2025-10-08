import { useEffect, useState } from "react";
import InstalledAppComponent from "../../components/InstalledApp/InstalledApp";
import SectionTitleComponent from "../../components/SectionTitle/SectionTitle";
import { getInstalledApps, removeInstalledApp } from "../../utils/localStorage";
import { gradientPrimaryBg } from "../../utils/classNames";
import { Link } from "react-router";
import InstallAppsTopBarComponent from "../../components/InstallAppsTopBar/InstallAppsTopBar";

export default function InstallationPage() {
  const [installedApps, setInstalledApps] = useState([]);
  useEffect(() => {
    setInstalledApps(getInstalledApps());
  }, []);
  const handleAppRemove = (id) => {
    removeInstalledApp(id);
    setInstalledApps(getInstalledApps());
  };
  return (
    <div className="mt-10 mb-20">
      <SectionTitleComponent
        title={"Your Installed Apps"}
        subtitle={"Explore All Trending Apps on the Market developed by us"}
      />

      {installedApps.length ? (
        <>
          <div className="mb-6">
            <InstallAppsTopBarComponent
              installedApps={installedApps}
              setInstalledApps={setInstalledApps}
            />
          </div>
          <div className="sm:block grid grid-cols-2 gap-3">
            {installedApps.map((appCard) => (
              <InstalledAppComponent
                app={appCard}
                key={appCard.id}
                handleAppRemove={handleAppRemove}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="rounded-sm bg-gray-200 py-10 px-4 flex items-center flex-col gap-3">
          <span className="text-red-600 font-medium text-xl">
            No App installed!
          </span>
          <Link to={"/apps"} className={`btn ${gradientPrimaryBg}`}>
            Find Apps
          </Link>
        </div>
      )}
    </div>
  );
}
