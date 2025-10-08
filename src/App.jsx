import { Outlet } from "react-router";
import "./App.css";
import NavbarComponent from "./components/Navbar/Navbar";
import FooterComponent from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import LoaderComponent from "./components/Loader/Loader";
import ScrollToTopComponent from "./components/ScrollToTop/ScrollToTop";
import { InstalledAppsContext } from "./contexts/InstalledAppsContext";
import { ToastContainer } from "react-toastify";

function App() {
  const [allApps, setAllApps] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("/data/appData.json")
      .then((res) => res.json())
      .then((data) => setAllApps(data))
      .finally(() => setIsLoading(false));
  }, []);
  const [installedApps, setInstalledApps] = useState([]);
  return (
    <>
      <ScrollToTopComponent />
      <div className="flex flex-col min-h-dvh bg-gray-100">
        <NavbarComponent />
        <InstalledAppsContext value={[installedApps, setInstalledApps]}>
          <div className="max-w-[1440px] mx-auto px-3 w-full grow">
            {isLoading ? <LoaderComponent /> : <Outlet context={{ allApps }} />}
          </div>
        </InstalledAppsContext>
        <FooterComponent />
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
