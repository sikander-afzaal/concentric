const ServiceSectionInfo = ({ classes, title, sub, desc1, desc2 }) => {
  return (
    <div
      className={`px-5 sm:px-10 ${classes} lg:flex-row flex-col  py-[30px] lg:py-[87px]  flex justify-between items-start gap-5 lg:gap-12`}
    >
      <div className="flex w-full justify-start items-start flex-col gap-3">
        <h3 className="text-black font-extrabold text-[40px] ">{title}</h3>
        <p className="text-black font-extrabold text-xl sm:text-2xl">{sub}</p>
      </div>
      <div className="w-full flex justify-start items-start flex-col gap-3">
        <p className="text-black leading-[1.7] font-light text-base sm:text-[20px]">
          {desc1}
        </p>
        <p className="text-black leading-[1.7] font-light text-base sm:text-[20px]">
          {desc2}
        </p>
      </div>
    </div>
  );
};

export default ServiceSectionInfo;
