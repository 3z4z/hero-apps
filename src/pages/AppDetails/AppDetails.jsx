import { useOutletContext, useParams } from "react-router";
import { slugify } from "../../utils/slugify";
import { gradientText } from "../../utils/classNames";
import { numberFormat } from "../../utils/numberFormatter";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingsIcon from "../../assets/icon-ratings.png";
import reviewsIcon from "../../assets/icon-review.png";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useContext } from "react";
import { InstalledAppsContext } from "../../contexts/InstalledAppsContext";
import { addInstalledApps, getInstalledApps } from "../../utils/localStorage";
import { BiCheck } from "react-icons/bi";
import { toast } from "react-toastify";
import {
  toastErrorConfig,
  toastSuccessConfig,
} from "../../configs/toastConfigs";
import ErrorAppPage from "../ErrorApp/ErrorApp";

export default function AppDetailsPage() {
  const [, setInstalledApps] = useContext(InstalledAppsContext);
  const { appSlug } = useParams();
  const { allApps } = useOutletContext();
  const isValidRoute = allApps.some((app) => slugify(app.title) === appSlug);
  if (!isValidRoute) {
    return <ErrorAppPage />;
  }
  const detailApp = allApps.find((app) => slugify(app.title) === appSlug);
  const {
    image,
    title,
    companyName,
    size,
    downloads,
    ratingAvg,
    ratings,
    reviews,
    description,
  } = detailApp;
  const isInstalled = getInstalledApps().find((app) => app.id === detailApp.id);
  return (
    <div className="pt-10 pb-20 max-w-[1440px] mx-auto px-3 w-full">
      <div className="flex sm:flex-row flex-col gap-10">
        <figure className="sm:w-auto w-fit aspect-square xl:max-h-[21.875rem] lg:max-h-56 max-h-48 bg-white rounded-md shadow-lg flex items-center justify-center p-8">
          <img src={image} alt="" className="object-contain md:w-full" />
        </figure>
        <div className="flex flex-col justify-between grow">
          <div>
            <div className="flex lg:flex-col sm:flex-row flex-col lg:items-start sm:items-center">
              <h1 className="font-bold text-[2rem] text-gray-900 mb-2">
                {title}
              </h1>
              <p className="lg:ms-0 sm:ms-3">
                <span className="text-gray-500">Developed by</span>
                <span className={`${gradientText} ms-1.5 font-bold`}>
                  {companyName}
                </span>
              </p>
            </div>
            <div className="xl:mt-8 xl:pt-8 mt-4 pt-4 border-t border-t-gray-300 flex sm:flex-nowrap flex-wrap items-end gap-7">
              <div className="flex items-center gap-3">
                <figure>
                  <img src={downloadIcon} className="lg:w-auto w-7" alt="" />
                </figure>
                <h2>
                  <p className="text-gray-600">Downloads</p>
                  <p className="text-gray-900 font-extrabold xl:text-4xl lg:text-2xl text-lg">
                    {numberFormat(downloads)}
                  </p>
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <figure>
                  <img src={ratingsIcon} className="lg:w-auto w-7" alt="" />
                </figure>
                <h2>
                  <p className="text-gray-600">Ratings</p>
                  <p className="text-gray-900 font-extrabold xl:text-4xl lg:text-2xl text-lg">
                    {ratingAvg}
                  </p>
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <figure>
                  <img src={reviewsIcon} className="lg:w-auto w-7" alt="" />
                </figure>
                <h2>
                  <p className="text-gray-600">Reviews</p>
                  <p className="text-gray-900 font-extrabold xl:text-4xl lg:text-2xl text-lg">
                    {numberFormat(reviews)}
                  </p>
                </h2>
              </div>
            </div>
          </div>
          <div className="sm:mt-0 mt-6">
            <button
              disabled={isInstalled}
              className={`btn  h-auto py-3 px-5 ${
                isInstalled ? "text-gray-600" : "btn-success text-white"
              }`}
              onClick={() => (
                setInstalledApps(getInstalledApps()),
                addInstalledApps(detailApp),
                !isInstalled
                  ? toast.success(
                      `${detailApp.title} has been installed successfully!`,
                      toastSuccessConfig
                    )
                  : toast.error(
                      `${detailApp.title} already installed!`,
                      toastErrorConfig
                    )
              )}
            >
              {isInstalled ? (
                <>
                  <BiCheck className="w-6 h-6 me-2" />
                  <span>Installed</span>
                </>
              ) : (
                `Install Now (${size} MB)`
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="pt-8 border-t border-t-gray-300 mb-8 mt-10">
        <p className="font-semibold text-2xl mb-8">Ratings</p>
        <div className="w-full h-80">
          <ResponsiveContainer>
            <BarChart
              layout="vertical"
              width={150}
              height={40}
              data={[...ratings].reverse()}
              margin={{
                top: 20,
                right: 50,
                left: 20,
                bottom: 10,
              }}
            >
              <XAxis
                axisLine={false}
                tickLine={false}
                tickMargin={10}
                type="number"
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tickMargin={15}
                type="category"
                dataKey="name"
              />
              <Tooltip />
              <Bar barSize={30} dataKey="count" fill="#FF8811" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="pt-8 border-t border-t-gray-300">
        <p className="font-semibold text-2xl mb-8">Description</p>
        <p>{description}</p>
      </div>
    </div>
  );
}
