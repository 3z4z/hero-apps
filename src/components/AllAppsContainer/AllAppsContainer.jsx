import { Link, useLocation, useOutletContext } from "react-router";
import { gradientPrimaryBg } from "../../utils/classNames";
import AppCardComponent from "./AppCard";
import { useEffect, useState } from "react";
import AllAppsTopBarComponent from "../AllAppsTopBar/AllAppsTopBar";
import AppNotFoundComponent from "../AppNotFound/AppNotFound";

export default function AllAppsContainerComponent() {
  const { allApps } = useOutletContext();
  const [apps, setApps] = useState([]);
  const location = useLocation();
  const isHomeRoute = location.pathname === "/";
  useEffect(() => {
    if (isHomeRoute) {
      const homeViewApps = allApps.slice(0, 8);
      setApps(homeViewApps);
    } else {
      setApps(allApps);
    }
  }, [allApps, isHomeRoute]);

  return (
    <>
      {!isHomeRoute ? (
        <AllAppsTopBarComponent apps={apps} setApps={setApps} />
      ) : null}
      {apps.length ? (
        <div
          className={`grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 ${
            isHomeRoute ? "mt-1 mb-10" : "mt-8 mb-20"
          }`}
        >
          {apps.map((app) => {
            return <AppCardComponent key={app.id} app={app} />;
          })}
        </div>
      ) : (
        <div className="mt-8 mb-20">
          <AppNotFoundComponent bodyText={"No Apps Found"} />
        </div>
      )}
      {isHomeRoute ? (
        <div className="flex justify-center mb-20">
          <Link to={"/apps"} className={`btn ${gradientPrimaryBg}`}>
            Show All Apps
          </Link>
        </div>
      ) : null}
    </>
  );
}
