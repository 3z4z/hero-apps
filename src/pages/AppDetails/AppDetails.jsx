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

export default function AppDetailsPage() {
  const { appSlug } = useParams();
  const { allApps } = useOutletContext();
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
  console.log(ratings);
  return (
    <div className="pt-10 pb-20">
      <div className="flex gap-10">
        <figure className="aspect-square max-h-[21.875rem] bg-white rounded-md shadow-lg flex items-center justify-center p-8">
          <img src={image} alt="" className="object-contain w-full" />
        </figure>
        <div className="flex flex-col justify-between grow">
          <div>
            <h1 className="font-bold text-[2rem] text-gray-900 mb-2">
              {title}
            </h1>
            <p>
              <span className="text-gray-500">Developed by</span>
              <span className={`${gradientText} ms-1.5 font-bold`}>
                {companyName}
              </span>
            </p>
            <div className="mt-8 pt-8 border-t border-t-gray-300 flex items-end gap-7">
              <div className="flex items-center gap-3">
                <figure>
                  <img src={downloadIcon} alt="" />
                </figure>
                <h2>
                  <p className="text-gray-600">Downloads</p>
                  <p className="text-gray-900 font-extrabold text-4xl">
                    {numberFormat(downloads)}
                  </p>
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <figure>
                  <img src={ratingsIcon} alt="" />
                </figure>
                <h2>
                  <p className="text-gray-600">Ratings</p>
                  <p className="text-gray-900 font-extrabold text-4xl">
                    {ratingAvg}
                  </p>
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <figure>
                  <img src={reviewsIcon} alt="" />
                </figure>
                <h2>
                  <p className="text-gray-600">Reviews</p>
                  <p className="text-gray-900 font-extrabold text-4xl">
                    {numberFormat(reviews)}
                  </p>
                </h2>
              </div>
            </div>
          </div>
          <div>
            <button className="btn btn-success text-white h-auto py-3 px-5">
              Install Now ({size} MB)
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
