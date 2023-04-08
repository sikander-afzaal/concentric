const Ranking = () => {
  return (
    <div className="wrapper mb-[100px] mt-[100px] sm:mt-[140px] xl:mt-[100px]">
      <div className="contain justify-center xl:justify-end items-center">
        <div className="w-full xl:flex-row flex-col max-w-[700px] xl:max-w-[1120px] pt-0 pb-10 xl:px-0 px-5 sm:px-10 xl:py-10  flex justify-between items-center bg-cyan">
          <div className="w-full -translate-y-10 xl:translate-y-0 xl:-translate-x-20">
            <img
              src="/ranking.jpeg"
              className="w-[100%] object-contain"
              alt=""
            />
          </div>
          <div className="w-full flex justify-start xl:pr-[30px]  items-start flex-col gap-3">
            <h3 className="text-black text-3xl leading-[1.2] sm:text-[40px] font-extrabold">
              Top Ranking in aktueller Lunendonk Liste
            </h3>
            <p className="text-[18px] sm:text-[20px] leading-[1.8] text-black font-light">
              codecentric zahlt zu den fuhrenden mittelstandischen
              IT-Beratungsunternehmen in Deutschland.
            </p>
            <button className="text-lg h-[55px] w-[221px] font-bold text-black bg-transparent border-[3px] hover:bg-black hover:text-cyan transition-all duration-300 border-solid border-black flex justify-center items-center gap-2">
              Mehr erfahren
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ranking;
