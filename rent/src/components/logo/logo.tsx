import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="headerLogoLink headerLogoLink--active">
      <img
        className="header__logo"
        src="img/logo.svg"
        alt="Rent service logo"
        width="81"
        height="41"
      />
    </Link>
  );
}

export { Logo };
