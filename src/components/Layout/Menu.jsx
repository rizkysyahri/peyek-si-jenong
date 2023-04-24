import * as React from "react";
import { storeData, navigationData } from "../../data/dummy-data";
import { Link } from "react-router-dom";

const MenuPage = () => {
  const { image } = storeData;
  const [active, setActive] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  function hamburgerClick() {
    setOpen(!open);
  }

  const classList = open ? "hamburger-active" : "";
  return (
    <div className={active ? "navbar active" : "navbar"} style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 100 }}>
      <div className="container">
        <div className="flex items-center justify-between relative z-10">
          <div className="px-4">
            <img src={image} alt="peyek" style={{ width: 100, height: 100 }} />
          </div>
          <div className="flex items-center px-4">
            <button
              name="hamburger"
              className={`block absolute right-4 mr-4 md:hidden  ${classList}`}
              onClick={hamburgerClick}
            >
              <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
              <span
                className="hamburger-line transition duration-300 ease-in-out"
                style={{ transitionDelay: open ? "0.15s" : "0.30s" }}
              ></span>
              <span
                className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"
                style={{ transitionDelay: open ? "0.3s" : "0.35s" }}
              ></span>
            </button>
          </div>
          <div>
            <ul
              className={`md:flex md:items-center md:pb-0 pb-10 absolute md:static text-center shadow-lg md:z-auto z-[-1] left-0 w-full md:w-auto cursor-pointer transition-all duration-500 ease-out md:shadow-none ${
                open ? "top-20" : "top-[-490px]"
              }`}
            >
              {navigationData.map((link) => (
                <li
                  key={link.name}
                  className="nav-link group md:ml-8 md:my-0 my-7"
                >
                  <Link to={link.url}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
