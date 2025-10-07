import { BsDownload, BsStar } from "react-icons/bs";
import { numberFormat } from "../../utils/numberFormatter";
import { useNavigate } from "react-router";
import { slugify } from "../../utils/slugify";

export default function AppCardComponent({ app }) {
  const { title, image, downloads, ratingAvg } = app;
  const navigate = useNavigate();
  const handleApp = (app) => {
    const appSlug = slugify(app.title);
    navigate(`/apps/${appSlug}`);
  };
  return (
    <div
      onClick={() => handleApp(app)}
      className="rounded-sm shadow-md cursor-pointer p-4 bg-white hover:shadow-xl transition"
    >
      <figure className="aspect-square rounded-sm bg-gray-200 w-full flex items-center justify-center p-10">
        <img src={image} alt={title} className="h-full object-contain" />
      </figure>
      <h5 className="my-4 font-medium text-xl">{title}</h5>
      <div className="flex justify-between">
        <div className="badge badge-lg items-center badge-soft badge-success font-medium">
          <BsDownload />
          <span>{numberFormat(downloads)}</span>
        </div>
        <div className="badge badge-lg items-center badge-soft badge-warning font-medium">
          <BsStar />
          <span>{ratingAvg}</span>
        </div>
      </div>
    </div>
  );
}
