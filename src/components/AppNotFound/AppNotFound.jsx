import { Link, useLocation } from "react-router";
import { gradientPrimaryBg } from "../../utils/classNames";

export default function AppNotFoundComponent({ bodyText }) {
  const location = useLocation();
  return (
    <div className="rounded-sm bg-gray-200 py-10 px-4 flex items-center flex-col gap-3">
      <p className="text-red-600 font-medium text-xl">{bodyText}</p>
      {location.pathname === "/apps" ? null : (
        <Link to={"/apps"} className={`btn ${gradientPrimaryBg}`}>
          See Our Apps
        </Link>
      )}
    </div>
  );
}
