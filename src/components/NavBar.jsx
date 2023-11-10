import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between">
        <a className="navbar-brand" href="/">
          ECOMMERCE
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">x</span>
        </button>
        <div
          className="collapse navbar-collapse d-flex justify-content-center"
          id="navbarText"
        >
          <ul className="navbar-nav text-center">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                href="/"
              >
                Products
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/">
                  Remeras
                </a>
                <a className="dropdown-item" href="/">
                  Buzos
                </a>
                <a className="dropdown-item" href="/">
                  Todos
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                About us
              </a>
            </li>
          </ul>
        </div>
        <span className="navbar-text">
          <a href="/">
            <FaShoppingCart />
          </a>
        </span>
      </nav>
    </>
  );
};

export default NavBar;
