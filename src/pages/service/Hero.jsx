const Hero = () => {
  return (
    <div className="wrapper bg-serviceBg bg-cover bg-center bg-no-repeat h-[calc(100vh_-_196px)] lg:h-[calc(100vh_-_180px)]">
      <div className="contain relative justify-start items-center h-full">
        <p className="text-white font-extrabold text-[38px] sm:text-[50px] lg:text-[80px]">
          Unsere Leistungen
        </p>
        <div className="absolute  bg-white shadow-xl bottom-0 translate-y-1/2 grid grid-cols-1 md:grid-cols-3 w-full left-0">
          <a
            href="#tech"
            className="py-3 md:flex-col flex-row md:py-[34px] pl-4 md:pl-7 lg:pl-10 flex justify-start items-center md:items-start gap-3 md:gap-1 w-full relative isolate group"
          >
            <span className="h-full  md:h-[7px] w-[5px] md:w-full absolute top-0 left-0 group-hover:w-full md:group-hover:h-full bg-seaGreen transition-all duration-500 -z-10"></span>
            <img
              src="/tech-ico.png"
              className="object-contain h-[36px]  md:h-[45px]"
              alt=""
            />
            <p className="text-black text-2xl lg:text-[32px] font-extrabold">
              Technology
            </p>
          </a>
          <a
            href="#empower"
            className="py-3 md:flex-col flex-row md:py-[34px] group isolate pl-4 md:pl-7 lg:pl-10 flex justify-start items-center md:items-start gap-3 md:gap-1 w-full relative"
          >
            <span className="h-full  md:h-[7px] w-[5px] md:w-full absolute top-0 left-0 group-hover:w-full md:group-hover:h-full bg-darkCyan transition-all duration-500 -z-10"></span>
            <img
              src="/empower-ico.png"
              className="object-contain h-[36px]  md:h-[45px]"
              alt=""
            />
            <p className="text-black  text-2xl lg:text-[32px] font-extrabold">
              Empower
            </p>
          </a>
          <a
            href="#create"
            className="py-3 md:flex-col flex-row md:py-[34px] pl-4 md:pl-7 lg:pl-10 flex justify-start items-center md:items-start gap-3 md:gap-1 isolate group w-full relative"
          >
            <span className="h-full  md:h-[7px] w-[5px] md:w-full absolute top-0 left-0 group-hover:w-full md:group-hover:h-full bg-yellow transition-all duration-500 -z-10"></span>
            <img
              src="/create-ico.png"
              className="object-contain h-[36px]  md:h-[45px]"
              alt=""
            />
            <p className="text-black text-2xl lg:text-[32px] font-extrabold">
              Create together
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
