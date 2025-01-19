import "./Header.scss";


const Header = () => {
  return (
    <header className="header">
      <div className="header__row">
        <h1 className="header__title animate__animated animate__fadeInLeft">
          VISPERIX
        </h1>
        <nav className="header__navigation animate__animated animate__fadeInRight">
          <a className="header__link" href="#">
            TOUR
          </a>
          <a className="header__link" href="#">
            SHOP
          </a>
          <a className="header__link" href="#">
            LISTEN
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
