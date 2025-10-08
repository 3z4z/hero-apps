export const getInstalledApps = () => {
  const getAppsStr = localStorage.getItem("installed-apps");
  if (getAppsStr) {
    const getApps = JSON.parse(getAppsStr);
    return getApps;
  }
  return [];
};

export const addInstalledApps = (app) => {
  const installedAppData = getInstalledApps();
  const currentInstalledAppData = installedAppData.some((a) => a.id === app.id);
  if (currentInstalledAppData) {
    return null;
  }
  installedAppData.push(app);
  const data = JSON.stringify(installedAppData);
  localStorage.setItem("installed-apps", data);
};

export const removeInstalledApp = (id) => {
  const installedApps = getInstalledApps();
  const updatedApps = installedApps.filter((app) => app.id !== id);
  if (updatedApps.length > 0) {
    localStorage.setItem("installed-apps", JSON.stringify(updatedApps));
  } else {
    localStorage.removeItem("installed-apps");
  }
};
