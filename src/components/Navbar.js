import "./style/Navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav
        className="navbar py-0 sticky-top navbar-expand-lg "
        style={{ width: "100vw" }}
      >
        <div className="container-fluid header">
          <Link className="navbar-brand headerLogo" to="/">
            <span>
              <h3 style={{ margin: "0px" }}>NEWS PANDA</h3>
              <p
                style={{
                  textAlign: "center",
                  margin: "0px",
                  fontSize: "medium",
                }}
              >
                News you want
              </p>
            </span>
          </Link>
          <button
            className="navbar-toggler headerButton"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <div className="navigation">
                <li className="navigation__item navigation__item--has-submenu">
                  <Link to="/" className="navigation__link">
                    CATEGORY
                  </Link>
                  <div className="submenu submenuLi">
                    <div className="submenu__content">
                      <div className="submenu__box">
                        <ul className="submenu-navigation navigationHeight">
                          <li className="submenu-navigation__item">
                            <Link
                              to="/business"
                              className="submenu-navigation__link"
                            >
                              <span
                                className="submenu-navigation__icon"
                                data-feather="hexagon"
                              ></span>
                              <span className="submenu-navigation__title">
                                Business
                              </span>
                              <span className="submenu-navigation__subtitle">
                                Enjoy our News
                              </span>
                            </Link>
                          </li>
                          <li className="submenu-navigation__item">
                            <Link
                              to="/entertainment"
                              className="submenu-navigation__link"
                            >
                              <span
                                className="submenu-navigation__icon"
                                data-feather="layers"
                              ></span>
                              <span className="submenu-navigation__title">
                                Entertainment
                              </span>
                              <span className="submenu-navigation__subtitle">
                                Enjoy our News
                              </span>
                            </Link>
                          </li>
                          <li className="submenu-navigation__item">
                            <Link
                              to="/health"
                              className="submenu-navigation__link"
                            >
                              <span
                                className="submenu-navigation__icon"
                                data-feather="command"
                              ></span>
                              <span className="submenu-navigation__title">
                                Health
                              </span>
                              <span className="submenu-navigation__subtitle">
                                Enjoy our News
                              </span>
                            </Link>
                          </li>
                          <li className="submenu-navigation__item">
                            <Link
                              to="/science"
                              className="submenu-navigation__link"
                            >
                              <span
                                className="submenu-navigation__icon"
                                data-feather="aperture"
                              ></span>
                              <span className="submenu-navigation__title">
                                Science
                              </span>
                              <span className="submenu-navigation__subtitle">
                                Enjoy our News
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="submenu__box">
                        <img
                          className="submenu__image"
                          src="https://images.unsplash.com/photo-1661423063753-ea9121c6abb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3840&q=80"
                          alt=""
                          style={{ paddingLeft: "20px", height: "195px" }}
                        />
                        <ul className="submenu-navigation">
                          <li
                            className="submenu-navigation__item"
                            style={{ paddingLeft: "20px", marginTop: "10px" }}
                          >
                            <Link
                              to="/technology"
                              className="submenu-navigation__link"
                            >
                              <span
                                className="submenu-navigation__icon"
                                data-feather="hexagon"
                              ></span>
                              <span className="submenu-navigation__title">
                                Technology
                              </span>
                              <span className="submenu-navigation__subtitle">
                                Enjoy our News
                              </span>
                            </Link>
                          </li>
                          <li
                            className="submenu-navigation__item"
                            style={{ paddingLeft: "20px" }}
                          >
                            <Link
                              to="/sports"
                              className="submenu-navigation__link"
                            >
                              <span
                                className="submenu-navigation__icon"
                                data-feather="layers"
                              ></span>
                              <span className="submenu-navigation__title">
                                Sports
                              </span>
                              <span className="submenu-navigation__subtitle">
                                Enjoy our News
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </div>

              <div className="navigation ">
                <li className="navigation__item navigation__item--has-submenu">
                  <Link to="#" className="navigation__link">
                    FEATURE
                  </Link>
                  <div className="submenu featureSubmenu">
                    <div
                      className="submenu__content "
                      style={{ height: "25rem" }}
                    >
                      <div className="submenu__box">
                        <img
                          className="submenu__image"
                          src="https://images.unsplash.com/photo-1661423063753-ea9121c6abb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3840&q=80"
                          alt=""
                        />
                        <ul className="submenu-navigation">
                          <li
                            className="submenu-navigation__item"
                            style={{ paddingTop: "10px" }}
                          >
                            <Link
                              to="/everything"
                              className="submenu-navigation__link"
                            >
                              <span
                                className="submenu-navigation__icon"
                                data-feather="aperture"
                              ></span>
                              <span className="submenu-navigation__title">
                                Everything
                              </span>
                              <span className="submenu-navigation__subtitle">
                                Enjoy our News
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="submenu__box">
                        <img
                          className="submenu__image"
                          src="https://images.unsplash.com/photo-1661423063753-ea9121c6abb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3840&q=80"
                          alt=""
                          style={{
                            marginLeft: "17px",
                          }}
                        />
                        <ul className="submenu-navigation">
                          <li
                            className="submenu-navigation__item"
                            style={{ paddingLeft: "20px", paddingTop: "10px" }}
                          >
                            <Link
                              to="topheadlines"
                              className="submenu-navigation__link"
                            >
                              <span
                                className="submenu-navigation__icon"
                                data-feather="hexagon"
                              ></span>
                              <span className="submenu-navigation__title">
                                Top headlines
                              </span>
                              <span className="submenu-navigation__subtitle">
                                Enjoy our News
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </div>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  ABOUT US
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
