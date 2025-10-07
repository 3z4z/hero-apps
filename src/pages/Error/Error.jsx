import { Link } from "react-router";
import { gradientPrimaryBg } from "../../utils/classNames";
import error404Img from "../../assets/error-404.png";
import NavbarComponent from "../../components/Navbar/Navbar";
import FooterComponent from "../../components/Footer/Footer";
export default function ErrorPage() {
  return (
    <>
      <NavbarComponent />
      <div className="flex flex-col items-center md:py-24 py-10 bg-gray-100">
        <img
          src={error404Img}
          alt=""
          className="md:mb-16 mb-8 lg:w-auto md:w-80 w-64"
        />
        <p className="font-semibold text-gray-900 md:text-5xl text-2xl text-center">
          Oops, page not found!
        </p>
        <p className="text-gray-500 md:text-xl mt-4 mb-6 text-center">
          The page you are looking for is not available.
        </p>
        <Link to={"/"} className={`btn ${gradientPrimaryBg}`}>
          Go Back!
        </Link>
      </div>
      <FooterComponent />
    </>
  );
}
