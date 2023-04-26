import * as React from "react";
import { navigationData } from "../../data/dummy-data";
import { Link } from "react-router-dom";

const HeaderForContact = () => {
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  function MenuClick() {
    setMenuOpen(!isMenuOpen);
  }

  console.log(isMenuOpen);

  const classList = isMenuOpen ? "hamburger-active" : "";

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap p-10 relative z-10">
        <div className="w-full lg:w-auto lg:flex-grow lg:flex lg:items-center">
          <div className="flex items-center px-4">
            <button
              name="hamburger"
              className={`block absolute right-4 mr-4 md:hidden  ${classList}`}
              onClick={MenuClick}
            >
              <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
              <span
                className="hamburger-line transition duration-300 ease-in-out"
                style={{ transitionDelay: isMenuOpen ? "0.15s" : "0.30s" }}
              ></span>
              <span
                className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"
                style={{ transitionDelay: isMenuOpen ? "0.3s" : "0.35s" }}
              ></span>
            </button>
          </div>
          <div className="text-sm lg:flex-grow">
            <div className="flex flex-wrap justify-end lg:justify-start">
              <ul
                className={`md:flex md:items-center md:pb-0 pb-10 absolute md:static text-center shadow-lg md:z-auto z-[-1] left-0 w-full md:w-auto cursor-pointer transition-all duration-300 ease-out md:shadow-none ${
                  isMenuOpen ? "top-20" : "top-[-490px]"
                }`}
                style={{ backgroundColor: "#fff" }}
              >
                {navigationData.map((link) => (
                  <li key={link.name} className="mr-6">
                    <Link to={link.url}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderForContact;
