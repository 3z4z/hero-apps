import { useEffect, useState } from "react";
import InstalledAppComponent from "../../components/InstalledApp/InstalledApp";
import SectionTitleComponent from "../../components/SectionTitle/SectionTitle";
import { getInstalledApps, removeInstalledApp } from "../../utils/localStorage";
import InstallAppsTopBarComponent from "../../components/InstallAppsTopBar/InstallAppsTopBar";
import AppNotFoundComponent from "../../components/AppNotFound/AppNotFound";

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
        <AppNotFoundComponent bodyText={"No Apps Installed!"} />
      )}
    </div>
  );
}
