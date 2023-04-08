import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitterSquare,
  faXing,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <div className="w-full hidden lg:block">
        <div className="wrapper bg-landingBg min-h-[850px] h-screen bg-cover bg-no-repeat bg-center">
          <div className="contain pt-[40px] pb-5 h-full flex-col justify-between items-center">
            <div className="w-full flex justify-between items-start gap-2">
              <img
                src="/logo.png"
                className="w-[240px] object-contain"
                alt=""
              />
              <div className="flex justify-start max-w-[500px] items-start flex-col gap-2">
                <h4 className="text-2xl font-black text-white">
                  Creating the digital future together.
                </h4>
                <p className="text-white text-lg">
                  Wir nehmen uns die Freiheit, die besten IT-Lösungen für unsere
                  Kunden zu entwickeln. Bei uns treffen Spitzentalente auf
                  innovative Technologien und moderne Methoden. So werden unsere
                  Kunden zu Vorreitern in der digitalen Welt.
                </p>
              </div>
            </div>
            <div className="flex -mt-10 justify-start items-start flex-col gap-5 w-full">
              <Link to="/" className="text-white font-extrabold text-[40px] ">
                Uber uns
              </Link>
              <Link
                to="/service"
                className="text-white font-extrabold text-[40px] "
              >
                Leistungen
              </Link>
              <Link to="/" className="text-white font-extrabold text-[40px] ">
                Success Stories
              </Link>
              <Link to="/" className="text-white font-extrabold text-[40px] ">
                Karriere
              </Link>
              <Link to="/" className="text-white font-extrabold text-[40px] ">
                Wissen
              </Link>
              <Link to="/" className="text-white font-extrabold text-[40px] ">
                Innovation
              </Link>
              <Link to="/" className="text-white font-extrabold text-[40px] ">
                Partner
              </Link>
            </div>
            <div className="w-full flex justify-between items-center gap-3">
              <p className="text-white font-light text-lg">
                codecentric AG 2023
              </p>
              <div className="flex justify-start items-center gap-16">
                <p className="text-white font-light text-lg">Newsletter</p>
                <p className="text-white font-light text-lg">Aktuelles</p>
                <p className="text-white font-light text-lg">Kontakt</p>
                <p className="text-white font-light text-lg">Impressum</p>
                <p className="text-white font-light text-lg">Datenshutz</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-[55px]  lg:hidden flex justify-start items-center flex-col">
        <div className="bg-landingBg wrapper  bg-cover bg-center h-[287px]">
          <div className="contain h-full justify-start items-center">
            <h3 className="max-w-[620px] text-white font-black text-2xl sm:text-[32px]">
              {" "}
              Wir machen unsere Kunden zu Vorreitern in der digitalen Welt.{" "}
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 grid-rows-2 w-full max-w-[90%] mt-5">
          <Box
            title="Unsere Leistungen"
            img="/cloud-1.jpg"
            name="Cloud-Native"
            btnText="Zu den Leistungen"
            url="/"
          />
          <Box
            title="Success Stories"
            img="/success-1.jpg"
            name="Success Story Lesen"
            btnText="Zu den Success Stories"
            url="/"
          />
          <Box
            title="Wissen"
            img="/software-1.jpg"
            name="Softwerker-Vol.15"
            btnText="Zum Wissensbereich"
            url="/"
          />
          <Box
            title="Karriere"
            img="/career.jpg"
            name="Erfahre mehr uber uns als Arbeitgeber!"
            btnText="Ubersicht Karriere"
            url="/"
          />
        </div>
        <div className="flex justify-start py-[62px] items-center gap-10 flex-col w-full">
          <div className="flex justify-start items-center flex-col gap-1 w-full">
            <p className="font-extrabold text-base text-black">
              Creating the digital future together.{" "}
            </p>
            <img
              src="/logo.png"
              className="w-[220px] invert object-contain"
              alt=""
            />
          </div>
          <div className="flex justify-start items-center flex-col gap-3 pt-10 w-full border-t border-solid border-lightGray">
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
    </>
  );
};

export default Index;

const Box = ({ title, name, url, btnText, img }) => {
  return (
    <div className="flex justify-between items-start flex-col gap-8 pb-5 border-b border-solid border-lightGray">
      <h3 className="text-black font-extrabold isolate leading-[1] text-2xl relative">
        {title}
        <span className="absolute w-[102%] -z-10 left-1/2 -translate-x-1/2 bottom-[4px] bg-cyan h-[3px]"></span>
      </h3>
      <div className="flex justify-between gap-3 items-center w-full">
        <div className="flex justify-start items-start flex-col gap-1">
          <h2 className="text-black font-extrabold leading-[1.2] text-[22px] sm:text-2xl ">
            {name}
          </h2>
          <Link to={url} className="flex justify-start items-center gap-1 ">
            <p className="text-black font-bold text-base">mehr erfahren</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>
        <img
          src={img}
          className="max-w-[125px] sm:max-w-[181px] w-full object-contain"
          alt=""
        />
      </div>

      <button className="bg-cyan text-black w-[60%] h-[44px] text-base font-bold hover:bg-black hover:text-cyan transition-all duration-300 border-none">
        {btnText}
      </button>
    </div>
  );
};
