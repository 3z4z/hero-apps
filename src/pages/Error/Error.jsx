import { Link } from "react-router";
import { gradientPrimaryBg } from "../../utils/classNames";
import error404Img from "../../assets/error-404.png";
import NavbarComponent from "../../components/Navbar/Navbar";
import FooterComponent from "../../components/Footer/Footer";
import SectionTitleComponent from "../../components/SectionTitle/SectionTitle";
export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center md:py-24 py-10 bg-gray-100">
      <img
        src={error404Img}
        alt=""
        className="md:mb-16 mb-8 lg:w-auto md:w-80 w-64"
      />
      <SectionTitleComponent
        title={"Oops, page not found!"}
        subtitle={"The page you are looking for is not available."}
      />
      <Link to={-1} className={`btn ${gradientPrimaryBg}`}>
        Go Back!
      </Link>
    </div>
  );
}
