import { gradientPrimaryBgDark } from "../../utils/classNames";
import heroIcon from "../../assets/logo.png";

export default function FooterComponent() {
  return (
    <footer className={`${gradientPrimaryBgDark} text-white`}>
      <div className="flex justify-center items-center gap-2 pt-10 pb-8">
        <img src={heroIcon} className="w-12" />
        <p className="font-semibold text-2xl">HERO.IO</p>
      </div>
      <div className="footer sm:footer-horizontal grid-rows-2 p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <a className="link link-hover">Twitter</a>
          <a className="link link-hover">Instagram</a>
          <a className="link link-hover">Facebook</a>
          <a className="link link-hover">GitHub</a>
        </nav>
        <nav>
          <h6 className="footer-title">Explore</h6>
          <a className="link link-hover">Features</a>
          <a className="link link-hover">Enterprise</a>
          <a className="link link-hover">Security</a>
          <a className="link link-hover">Pricing</a>
        </nav>
        <nav>
          <h6 className="footer-title">Apps</h6>
          <a className="link link-hover">Mac</a>
          <a className="link link-hover">Windows</a>
          <a className="link link-hover">iPhone</a>
          <a className="link link-hover">Android</a>
        </nav>
      </div>
      <p className="text-center py-8 mx-4 border-t border-t-gray-200/25">
        Copyright &copy; 2025 - All right reserved
      </p>
    </footer>
  );
}
