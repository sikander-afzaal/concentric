import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const MobHeader = () => {
  const [headerToggle, setHeaderToggle] = useState(false);
  return (
    <>
      <div className="lg:hidden flex w-full justify-start flex-col bg-white items-center fixed top-0 left-0 z-50">
        <div className="contain justify-between items-center h-[55px]">
          <Link to="/">
            <img
              src="/logo.png"
              className="w-[150px] object-contain invert"
              alt=""
            />
          </Link>
          <button onClick={() => setHeaderToggle((prev) => !prev)}>
            {headerToggle ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="black"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div
        className={`fixed overflow-y-auto  left-0 bg-white pt-[70px] w-full flex justify-center items-start h-full z-[49] transition-all duration-700 ${
          headerToggle ? "top-0" : "-top-full"
        }`}
      >
        <div className="flex w-full flex-col justify-start items-center ">
          <DropMenu
            setHeaderToggle={setHeaderToggle}
            name="Uber uns"
            url="/"
            items={[
              "Application Performance Management",
              "AI Sweep Scan",
              "Brown Paper Bag Lunches",
              "Cloud-Native",
              "Industrial IoT Industrie 4.0",
              "Information Security",
              "IT Acceleration",
              "IT Integration",
              "Kunstliche Intelligenz",
              "Managed Services",
              "Smart Data and Artificial Intelligence",
            ]}
          />
          <DropMenu
            url="/service"
            setHeaderToggle={setHeaderToggle}
            name="Leistungen"
            items={[
              "Application Performance Management",
              "AI Sweep Scan",
              "Brown Paper Bag Lunches",
              "Cloud-Native",
              "Industrial IoT Industrie 4.0",
              "Information Security",
              "IT Acceleration",
              "IT Integration",
              "Kunstliche Intelligenz",
              "Managed Services",
              "Smart Data and Artificial Intelligence",
            ]}
          />
          <DropMenu
            url="/"
            setHeaderToggle={setHeaderToggle}
            name="Success Stories"
            items={[
              "Application Performance Management",
              "AI Sweep Scan",
              "Brown Paper Bag Lunches",
              "Cloud-Native",
              "Industrial IoT Industrie 4.0",
              "Information Security",
              "IT Acceleration",
              "IT Integration",
              "Kunstliche Intelligenz",
              "Managed Services",
              "Smart Data and Artificial Intelligence",
            ]}
          />
          <DropMenu
            url="/"
            setHeaderToggle={setHeaderToggle}
            name="Karriere"
            items={[
              "Application Performance Management",
              "AI Sweep Scan",
              "Brown Paper Bag Lunches",
              "Cloud-Native",
              "Industrial IoT Industrie 4.0",
              "Information Security",
              "IT Acceleration",
              "IT Integration",
              "Kunstliche Intelligenz",
              "Managed Services",
              "Smart Data and Artificial Intelligence",
            ]}
          />
          <DropMenu
            url="/"
            setHeaderToggle={setHeaderToggle}
            name="Wissen"
            items={[
              "Application Performance Management",
              "AI Sweep Scan",
              "Brown Paper Bag Lunches",
              "Cloud-Native",
              "Industrial IoT Industrie 4.0",
              "Information Security",
              "IT Acceleration",
              "IT Integration",
              "Kunstliche Intelligenz",
              "Managed Services",
              "Smart Data and Artificial Intelligence",
            ]}
          />
          <DropMenu
            url="/"
            setHeaderToggle={setHeaderToggle}
            name="Innovation"
            items={[
              "Application Performance Management",
              "AI Sweep Scan",
              "Brown Paper Bag Lunches",
              "Cloud-Native",
              "Industrial IoT Industrie 4.0",
              "Information Security",
              "IT Acceleration",
              "IT Integration",
              "Kunstliche Intelligenz",
              "Managed Services",
              "Smart Data and Artificial Intelligence",
            ]}
          />
          <DropMenu
            url="/"
            setHeaderToggle={setHeaderToggle}
            name="Partner"
            items={[
              "Application Performance Management",
              "AI Sweep Scan",
              "Brown Paper Bag Lunches",
              "Cloud-Native",
              "Industrial IoT Industrie 4.0",
              "Information Security",
              "IT Acceleration",
              "IT Integration",
              "Kunstliche Intelligenz",
              "Managed Services",
              "Smart Data and Artificial Intelligence",
            ]}
          />
          <MenuLink
            name="Aktuelles"
            url="/"
            setHeaderToggle={setHeaderToggle}
          />
          <MenuLink name="Kontakt" url="/" setHeaderToggle={setHeaderToggle} />
        </div>
      </div>
    </>
  );
};

export default MobHeader;

const DropMenu = ({ name, items, setHeaderToggle, url }) => {
  const [activeDrop, setActiveDrop] = useState(false);
  return (
    <div className="flex justify-start items-center flex-col w-full">
      <button
        onClick={() => setActiveDrop((prev) => !prev)}
        className="flex justify-between items-center border-b border-solid border-lightGray py-[10px] px-5 w-full"
      >
        <p className="text-black md:text-base text-sm">{name}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-6 h-6 ${
            activeDrop ? "rotate-180" : "rotate-0"
          } transition-all duration-500`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      <div
        className={`flex justify-start w-full items-center flex-col overflow-hidden ${
          activeDrop ? "max-h-[9000px]" : "max-h-0"
        } transition-all duration-700`}
      >
        {items.map((elem, idx) => {
          return (
            <Link
              onClick={() => setHeaderToggle(false)}
              key={idx + elem}
              className="w-full md:text-base text-sm text-black font-medium px-8 py-[10px] border-b border-solid border-lightGray"
              to={url}
            >
              {elem}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

const MenuLink = ({ url, name, setHeaderToggle }) => {
  return (
    <NavLink
      onClick={() => setHeaderToggle(false)}
      to={url}
      className="flex justify-between items-center border-b border-solid border-lightGray py-[10px] px-5 w-full"
    >
      <p className="text-black md:text-base text-sm">{name}</p>
    </NavLink>
  );
};
