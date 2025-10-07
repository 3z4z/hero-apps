import { gradientPrimaryBg, gradientText } from "../../utils/classNames";
import heroIcon from "../../assets/logo.png";
import { Link, NavLink } from "react-router";
import { BsGithub } from "react-icons/bs";
import { RiMenu2Line } from "react-icons/ri";
export default function NavbarComponent() {
  const navLinks = [
    { title: "Home", path: "" },
    { title: "Apps", path: "apps" },
    { title: "Installation", path: "installation" },
  ];
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <RiMenu2Line className="text-primary w-5 h-5" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks.map((link, i) => (
              <li key={i}>
                <NavLink to={link.path}>{link.title}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <Link to={""} className="flex items-center gap-1 cursor-pointer">
          <img className="h-10" src={heroIcon} alt="" />
          <span className={`font-bold ${gradientText}`}>HERO.IO</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks.map((link, i) => (
            <li key={i} className="px-3 py-2">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `font-semibold p-0 rounded-none ${gradientText} ${
                    isActive ? "border-b-2 border-b-[#9F62F2]" : ""
                  }`
                }
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <div>
          <a
            href="https://github.com/3z4z"
            target="_blank"
            className={`btn ${gradientPrimaryBg} flex gap-2 py-3 px-4 h-auto`}
          >
            <BsGithub className="w-5 h-5" />
            <span>Contribute</span>
          </a>
        </div>
      </div>
    </div>
  );
}
