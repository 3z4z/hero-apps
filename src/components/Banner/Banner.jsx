import { gradientText } from "../../utils/classNames";
import playstoreIcon from "../../assets/playstore.png";
import appstoreIcon from "../../assets/appstore.png";
import heroImage from "../../assets/hero.png";
export default function BannerComponent() {
  const appLinks = [
    {
      title: "Google Play",
      icon: playstoreIcon,
      href: "https://play.google.com/store/apps",
    },
    {
      title: "App Store",
      icon: appstoreIcon,
      href: "https://www.apple.com/app-store/",
    },
  ];
  return (
    <div className="flex flex-col items-center text-center mt-20 max-w-[1440px] mx-auto px-3 w-full ">
      <p className="font-extrabold lg:text-7xl sm:text-6xl text-4xl text-gray-900">
        <span>We Build</span>
        <br />
        <span className={`${gradientText} me-3`}>Productive</span>
        Apps
      </p>
      <p className="text-gray-500 my-6">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. <br /> Our goal is to turn your
        ideas into digital experiences that truly make an impact.
      </p>
      <div className="flex justify-center gap-3 mb-10 flex-wrap">
        {appLinks.map((link, i) => (
          <a
            target="_blank"
            href={link.href}
            key={i}
            className="btn h-auto bg-gray-100 hover:bg-white lg:py-4 lg:px-6 py-2 px-5 hover:shadow-lg"
          >
            <img src={link.icon} alt="" />
            <p className="lg:text-xl font-semibold text-gray-900">
              {link.title}
            </p>
          </a>
        ))}
      </div>
      <img src={heroImage} alt="" className="max-w-4xl w-full" />
    </div>
  );
}
