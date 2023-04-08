import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitterSquare,
  faXing,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="wrapper">
      <div className="contain sm:mt-[40px] pb-10 justify-between items-center sm:items-start sm:flex-row flex-col gap-8 sm:gap-2">
        <img
          src="/logo.png"
          className="invert w-[220px] object-contain"
          alt=""
        />
        <div className="flex justify-start items-center flex-col gap-3 ">
          <div className="w-full flex justify-center items-center gap-8">
            <a href="#" target="blank">
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-[26px] text-black hover:text-cyan active:text-cyan transition-all duration-300"
              />
            </a>
            <a href="#" target="blank">
              <FontAwesomeIcon
                icon={faTwitterSquare}
                className="text-[26px] text-black hover:text-cyan active:text-cyan transition-all duration-300"
              />
            </a>
            <a href="#" target="blank">
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-[26px] text-black hover:text-cyan active:text-cyan transition-all duration-300"
              />
            </a>
            <a href="#" target="blank">
              <FontAwesomeIcon
                icon={faYoutube}
                className="text-[26px] text-black hover:text-cyan active:text-cyan transition-all duration-300"
              />
            </a>
            <a href="#" target="blank">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-[26px] text-black hover:text-cyan active:text-cyan transition-all duration-300"
              />
            </a>
            <a href="#" target="blank">
              <FontAwesomeIcon
                icon={faXing}
                className="text-[26px] text-black hover:text-cyan active:text-cyan transition-all duration-300"
              />
            </a>
          </div>
          <div className="w-full flex justify-center items-center gap-6">
            <a
              href="#"
              className="text-textGray text-base font-bold transition-all  active:text-black hover:text-black"
            >
              Impressum
            </a>
            <a
              href="#"
              className="text-textGray text-base font-bold transition-all  active:text-black hover:text-black"
            >
              Datenschutzerklarung
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
