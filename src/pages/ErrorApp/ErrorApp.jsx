import { Link } from "react-router";
import { gradientPrimaryBg } from "../../utils/classNames";
import errorAppImg from "../../assets/app-error.png";
import SectionTitleComponent from "../../components/SectionTitle/SectionTitle";
export default function ErrorAppPage() {
  return (
    <>
      <div className="flex flex-col items-center md:py-24 py-10 bg-gray-100">
        <img
          src={errorAppImg}
          alt=""
          className="md:mb-16 mb-8 lg:w-auto md:w-80 w-64"
        />
        <SectionTitleComponent
          title={"OPPS!! APP NOT FOUND"}
          subtitle={
            "The App you are requesting is not found on our system.  please try another apps"
          }
        />
        <Link to={-1} className={`btn ${gradientPrimaryBg}`}>
          Go Back!
        </Link>
      </div>
    </>
  );
}
