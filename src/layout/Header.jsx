import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="hidden lg:flex justify-start items-center flex-col w-full bg-white z-40 fixed top-0 left-0">
      <div className="contain h-[90px] justify-between items-center gap-2">
        <div className="flex justify-start items-center  ">
          <Link to="/">
            <img
              src="/ico.png"
              className="object-contain h-[30px] border-r border-solid border-[#DADADA] pr-5"
              alt=""
            />
          </Link>
          <p className="text-xl font-bold text-black ml-5">Leistungen</p>
        </div>
        <Link to={"/"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="black"
            className="w-[35px] h-[35px] hover:opacity-30 transition-all duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Header;
