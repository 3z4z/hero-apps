import { BsDownload, BsStarFill } from "react-icons/bs";
import { numberFormat } from "../../utils/numberFormatter";
import { toast } from "react-toastify";
import { toastSuccessConfig } from "../../configs/toastConfigs";

export default function InstalledAppComponent({ app, handleAppRemove }) {
  const { id, image, title, downloads, ratingAvg, size } = app;
  return (
    <div className="sm:max-w-full max-w-xs flex sm:flex-row flex-col gap-4 sm:items-center sm:mb-4 last:mb-0 p-4 rounded-sm bg-white shadow">
      <figure className="bg-gray-200 rounded-sm flex items-center justify-center p-4 w-20 aspect-square">
        <img src={image} alt={title} />
      </figure>
      <div className="grow">
        <h4 className="mb-4 font-medium text-gray-900 text-xl">{title}</h4>
        <div className="flex sm:gap-4 gap-2 items-center sm:text-base text-xs flex-wrap">
          <div className="flex gap-2 items-center text-success">
            <BsDownload />
            <span>{numberFormat(downloads)}</span>
          </div>
          <div className="flex gap-2 items-center text-warning">
            <BsStarFill />
            <span>{ratingAvg}</span>
          </div>
          <div className="flex gap-2 items-center text-gray-600">
            <span>
              {size}
              <span className="ms-1">MB</span>
            </span>
          </div>
        </div>
      </div>
      <button
        className="btn bg-red-600/75 text-white hover:bg-red-600 w-fit"
        onClick={() => (
          handleAppRemove(id),
          toast.success("App Uninstalled Successfully", toastSuccessConfig)
        )}
      >
        Uninstall
      </button>
    </div>
  );
}
