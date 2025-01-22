import "./Header.scss";
import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Header = () => {
  const [scrollingUp, setScrollingUp] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const location = useLocation();



  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < prevScrollY) {
        setScrollingUp(true);
      } else if (currentScrollY > prevScrollY && currentScrollY > 100) {
        setScrollingUp(false);
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);



  return (
    <header
      className={`header`}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        transition: "transform 0.3s ease",
        transform: scrollingUp ? "translateY(0)" : "translateY(-100%)",
      }}
    >
      <div className="header__row">
        {location.pathname === "/" ? (
          <h1 className="header__title animate__animated animate__fadeInLeft">
            VISPERIX
          </h1>
        ) : (
          <Link
            to="/"
            className="header__title animate__animated animate__fadeInLeft"
          >
            VISPERIX
          </Link>
        )}
        <nav className="header__navigation animate__animated animate__fadeInRight">
          <a className="header__link" href="#">
            TOUR
          </a>
          <Link className="header__link" to="/products">
            SHOP
          </Link>
          <a className="header__link" href="#">
            LISTEN
          </a>
        </nav>
      </div>
      <Outlet />
    </header>
  );
};

export default Header;
