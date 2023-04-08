import { Link } from "react-router-dom";

const ServiceRow = ({ img, title, desc, link, order }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5 auto-rows-auto lg:auto-rows-fr w-full">
      <img
        src={img}
        className={`object-contain w-full max-w-[470px] ${
          order
            ? "lg:col-start-2 lg:col-end-3 lg:justify-self-end col-auto"
            : "lg:justify-start lg:col-start-1 lg:col-end-2 col-auto"
        }`}
        alt=""
      />
      <div
        className={`flex justify-start items-start flex-col gap-3 sm:gap-4 lg:row-start-1 lg:row-end-2 w-full ${
          order
            ? "lg:col-start-1 lg:col-end-2 col-auto"
            : "col-auto lg:col-start-2 lg:col-end-3"
        }`}
      >
        <h3 className="text-black font-extrabold text-2xl sm:text-[32px]">
          {title}
        </h3>
        <p className="text-black text-lg sm:text-[20px] font-light leading-[1.8]">
          {desc}
        </p>
        <Link
          to={link}
          className="flex group justify-start items-center gap-1 "
        >
          <p className="text-black  font-bold text-xl relative isolate">
            <span className="absolute -z-10 w-[104%] bottom-2 h-[5px] group-hover:scale-x-100 origin-left scale-x-0 left-1/2 -translate-x-1/2  transition-all duration-500 bg-[#0cffae]"></span>
            Mehr erfahren
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="black"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ServiceRow;
