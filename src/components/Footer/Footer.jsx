import { gradientPrimaryBgDark } from "../../utils/classNames";
import heroIcon from "../../assets/logo.png";
import {
  BsFacebook,
  BsInstagram,
  BsTelegram,
  BsWhatsapp,
} from "react-icons/bs";

export default function FooterComponent() {
  const socialLinks = [
    { icon: <BsFacebook className="w-5 h-5" /> },
    { icon: <BsTelegram className="w-5 h-5" /> },
    { icon: <BsWhatsapp className="w-5 h-5" /> },
    { icon: <BsInstagram className="w-5 h-5" /> },
  ];
  const serviceLinks = [
    { title: "Installation Guide" },
    { title: "App Verification" },
    { title: "Payment setup" },
    { title: "Unlock Premium" },
  ];
  const devLinks = [
    { title: "Developer Console" },
    { title: "Contribute" },
    { title: "Submit Apps" },
    { title: "App Builder" },
  ];
  const companyLinks = [
    { title: "About Us" },
    { title: "Contact Us" },
    { title: "FAQ" },
    { title: "Support Center" },
    { title: "Live Assistance", newFeature: true },
  ];
  return (
    <footer
      className={`${gradientPrimaryBgDark} text-white lg:mx-3 lg:mb-3 lg:rounded-lg`}
    >
      <div className="grid lg:grid-cols-5 sm:grid-cols-2 max-w-[1440px] lg:gap-6 gap-16 mx-auto w-full pt-20 pb-16 px-3">
        <div className="lg:col-span-2 sm:w-3/4">
          <div className="flex items-center gap-3 mb-6">
            <img src={heroIcon} className="w-12" />
            <p className="font-semibold text-2xl">HERO.IO</p>
          </div>
          <p className="text-gray-400">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. <br /> Our goal is to turn your
            ideas into digital experiences that truly make an impact.
          </p>
          <div className="flex mt-8 gap-5">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="hover:text-gray-300 transition"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold text-xl mb-8">Services</p>
          <ul>
            {serviceLinks.map((link, index) => (
              <li key={index} className="mb-3 last:mb-0">
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition hover:translate-x-2"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-xl mb-8">Developers</p>
          <ul>
            {devLinks.map((link, index) => (
              <li key={index} className="mb-3 last:mb-0">
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition hover:translate-x-2"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-xl mb-8">Company</p>
          <ul>
            {companyLinks.map((link, index) => (
              <li
                key={index}
                className="mb-3 last:mb-0 flex items-center gap-2.5"
              >
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition hover:translate-x-2"
                >
                  {link.title}
                </a>
                {link.newFeature ? (
                  <span className="badge text-primary badge-xs font-semibold">
                    New
                  </span>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="text-center py-8 mx-4 border-t border-t-gray-200/25 text-gray-300">
        Copyright &copy; 2025 - All right reserved
      </p>
    </footer>
  );
}
