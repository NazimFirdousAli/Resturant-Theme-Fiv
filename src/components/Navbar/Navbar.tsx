import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import logo from "../../assests/logo.png";

type PropsType = {
  backgroundColor?: string;
  positionCss?: string;
};

const Navbar = ({ positionCss, backgroundColor }: PropsType) => {
  // Add active class
  const [currentPath] = useState("");
  // console.log(router.asPath)

  const [displayAuth, setDisplayAuth] = useState(false);
  const [displayMiniAuth, setDisplayMiniAuth] = useState(false);
  const [sticky, setSticky] = useState(false);

  // sticky menu
  const showStickyMenu = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  if (typeof window !== "undefined") {
    // browser code
    window.addEventListener("scroll", showStickyMenu);
  }
  const toggleAuth = () => {
    setDisplayAuth(!displayAuth);
  };
  const toggleMiniAuth = () => {
    setDisplayMiniAuth(!displayMiniAuth);
  };

  const [showMenu, setshowMenu] = useState(false);

  const toggleMenu = () => {
    setshowMenu(!showMenu);
  };

  useEffect(() => {
    const abortController = new AbortController();
    // your async action is here
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <>
      <div className={displayAuth ? "body_overlay open" : "body_overlay"}></div>
      <div
        style={
          positionCss === "relative"
            ? { position: "sticky", backgroundColor: backgroundColor }
            : undefined
        }
        className={
          sticky
            ? "is-sticky navbar-area navbar-style-two"
            : "navbar-area navbar-style-two"
        }
        // style={
        //   positionCss === "relative" && {
        //     position: "sticky",
        //     backgroundColor: backgroundColor,
        //   }
        // }
      >
        <div className="miran-responsive-nav">
          <div className="container">
            <div className="miran-responsive-menu">
              <div onClick={() => toggleMenu()} className="hamburger-menu">
                {showMenu ? (
                  <i className="bx bx-x"></i>
                ) : (
                  <i className="bx bx-menu"></i>
                )}
              </div>
              <div className="logo">
                <a href="/">
                  <img src={logo} alt="logo" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={showMenu ? "miran-nav show" : "miran-nav"}>
          <div className="container-fluid">
            <nav className="navbar navbar-expand-md navbar-light">
              <a href="/" className="navbar-brand">
                <img src={logo} alt="logo" />
              </a>

              <div className="collapse navbar-collapse mean-menu">
                <form className="navbar-search-box search-box-one">
                  <label>
                    <i className="flaticon-search"></i>
                  </label>
                  <input
                    type="text"
                    className="input-search"
                    placeholder="Search..."
                  />
                </form>

                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a href="#" className="dropdown-toggle nav-link">
                      Discover
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a
                          href="/"
                          className={`nav-link ${
                            currentPath == "/" && "active"
                          }`}
                        >
                          <div className="icon-span-class">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              style={{ marginRight: "10px" }}
                              fill="currentColor"
                              className="bi bi-cc-circle"
                              viewBox="0 0 16 16"
                            >
                              <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.408 5.89c-.83 0-1.318.64-1.318 1.753v.742c0 1.108.479 1.727 1.318 1.727.69 0 1.138-.435 1.187-1.05h1.147v.114c-.058 1.147-1.029 1.938-2.343 1.938-1.612 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.319 0 2.29.812 2.343 1.999v.11H6.595c-.049-.638-.506-1.108-1.187-1.108Zm5.404 0c-.831 0-1.319.64-1.319 1.753v.742c0 1.108.48 1.727 1.319 1.727.69 0 1.138-.435 1.186-1.05h1.147v.114c-.057 1.147-1.028 1.938-2.342 1.938-1.613 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.318 0 2.29.812 2.342 1.999v.11h-1.147c-.048-.638-.505-1.108-1.186-1.108Z" />
                            </svg>
                            <span>Things to do</span>
                          </div>
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          href="/index-2/"
                          className={`nav-link ${
                            currentPath == "/index-2/" && "active"
                          }`}
                        >
                          <div className="icon-span-class">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              style={{ marginRight: "10px" }}
                              fill="currentColor"
                              className="bi bi-cc-circle"
                              viewBox="0 0 16 16"
                            >
                              <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.408 5.89c-.83 0-1.318.64-1.318 1.753v.742c0 1.108.479 1.727 1.318 1.727.69 0 1.138-.435 1.187-1.05h1.147v.114c-.058 1.147-1.029 1.938-2.343 1.938-1.612 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.319 0 2.29.812 2.343 1.999v.11H6.595c-.049-.638-.506-1.108-1.187-1.108Zm5.404 0c-.831 0-1.319.64-1.319 1.753v.742c0 1.108.48 1.727 1.319 1.727.69 0 1.138-.435 1.186-1.05h1.147v.114c-.057 1.147-1.028 1.938-2.342 1.938-1.613 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.318 0 2.29.812 2.342 1.999v.11h-1.147c-.048-.638-.505-1.108-1.186-1.108Z" />
                            </svg>
                            <span>Where to eat</span>
                          </div>
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          href="/index-3/"
                          className={`nav-link ${
                            currentPath == "/index-3/" && "active"
                          }`}
                        >
                          <div className="icon-span-class">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              style={{ marginRight: "10px" }}
                              fill="currentColor"
                              className="bi bi-cc-circle"
                              viewBox="0 0 16 16"
                            >
                              <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.408 5.89c-.83 0-1.318.64-1.318 1.753v.742c0 1.108.479 1.727 1.318 1.727.69 0 1.138-.435 1.187-1.05h1.147v.114c-.058 1.147-1.029 1.938-2.343 1.938-1.612 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.319 0 2.29.812 2.343 1.999v.11H6.595c-.049-.638-.506-1.108-1.187-1.108Zm5.404 0c-.831 0-1.319.64-1.319 1.753v.742c0 1.108.48 1.727 1.319 1.727.69 0 1.138-.435 1.186-1.05h1.147v.114c-.057 1.147-1.028 1.938-2.342 1.938-1.613 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.318 0 2.29.812 2.342 1.999v.11h-1.147c-.048-.638-.505-1.108-1.186-1.108Z" />
                            </svg>
                            <span>Where to shop</span>
                          </div>
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          href="/index-4/"
                          className={`nav-link ${
                            currentPath == "/index-4/" && "active"
                          }`}
                        >
                          <div className="icon-span-class">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              style={{ marginRight: "10px" }}
                              fill="currentColor"
                              className="bi bi-cc-circle"
                              viewBox="0 0 16 16"
                            >
                              <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.408 5.89c-.83 0-1.318.64-1.318 1.753v.742c0 1.108.479 1.727 1.318 1.727.69 0 1.138-.435 1.187-1.05h1.147v.114c-.058 1.147-1.029 1.938-2.343 1.938-1.612 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.319 0 2.29.812 2.343 1.999v.11H6.595c-.049-.638-.506-1.108-1.187-1.108Zm5.404 0c-.831 0-1.319.64-1.319 1.753v.742c0 1.108.48 1.727 1.319 1.727.69 0 1.138-.435 1.186-1.05h1.147v.114c-.057 1.147-1.028 1.938-2.342 1.938-1.613 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.318 0 2.29.812 2.342 1.999v.11h-1.147c-.048-.638-.505-1.108-1.186-1.108Z" />
                            </svg>
                            <span>Where to stay</span>
                          </div>
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          href="/index-4/"
                          className={`nav-link ${
                            currentPath == "/index-4/" && "active"
                          }`}
                        >
                          <div className="icon-span-class">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              style={{ marginRight: "10px" }}
                              fill="currentColor"
                              className="bi bi-cc-circle"
                              viewBox="0 0 16 16"
                            >
                              <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.408 5.89c-.83 0-1.318.64-1.318 1.753v.742c0 1.108.479 1.727 1.318 1.727.69 0 1.138-.435 1.187-1.05h1.147v.114c-.058 1.147-1.029 1.938-2.343 1.938-1.612 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.319 0 2.29.812 2.343 1.999v.11H6.595c-.049-.638-.506-1.108-1.187-1.108Zm5.404 0c-.831 0-1.319.64-1.319 1.753v.742c0 1.108.48 1.727 1.319 1.727.69 0 1.138-.435 1.186-1.05h1.147v.114c-.057 1.147-1.028 1.938-2.342 1.938-1.613 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.318 0 2.29.812 2.342 1.999v.11h-1.147c-.048-.638-.505-1.108-1.186-1.108Z" />
                            </svg>
                            <span>Where to visit</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="dropdown-toggle nav-link">
                      Listings
                    </a>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <div className="icon-span-class">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              style={{ marginRight: "10px" }}
                              fill="currentColor"
                              className="bi bi-cc-circle"
                              viewBox="0 0 16 16"
                            >
                              <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.408 5.89c-.83 0-1.318.64-1.318 1.753v.742c0 1.108.479 1.727 1.318 1.727.69 0 1.138-.435 1.187-1.05h1.147v.114c-.058 1.147-1.029 1.938-2.343 1.938-1.612 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.319 0 2.29.812 2.343 1.999v.11H6.595c-.049-.638-.506-1.108-1.187-1.108Zm5.404 0c-.831 0-1.319.64-1.319 1.753v.742c0 1.108.48 1.727 1.319 1.727.69 0 1.138-.435 1.186-1.05h1.147v.114c-.057 1.147-1.028 1.938-2.342 1.938-1.613 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.318 0 2.29.812 2.342 1.999v.11h-1.147c-.048-.638-.505-1.108-1.186-1.108Z" />
                            </svg>
                            <span>Cars and Auto</span>
                          </div>
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          href="/destinations/"
                          className={`nav-link ${
                            currentPath == "/destinations/" && "active"
                          }`}
                        >
                          <div className="icon-span-class">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              style={{ marginRight: "10px" }}
                              fill="currentColor"
                              className="bi bi-cc-circle"
                              viewBox="0 0 16 16"
                            >
                              <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.408 5.89c-.83 0-1.318.64-1.318 1.753v.742c0 1.108.479 1.727 1.318 1.727.69 0 1.138-.435 1.187-1.05h1.147v.114c-.058 1.147-1.029 1.938-2.343 1.938-1.612 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.319 0 2.29.812 2.343 1.999v.11H6.595c-.049-.638-.506-1.108-1.187-1.108Zm5.404 0c-.831 0-1.319.64-1.319 1.753v.742c0 1.108.48 1.727 1.319 1.727.69 0 1.138-.435 1.186-1.05h1.147v.114c-.057 1.147-1.028 1.938-2.342 1.938-1.613 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.318 0 2.29.812 2.342 1.999v.11h-1.147c-.048-.638-.505-1.108-1.186-1.108Z" />
                            </svg>
                            <span>Homes and Properties</span>
                          </div>
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          href="/categories/"
                          className={`nav-link ${
                            currentPath == "/categories/" && "active"
                          }`}
                        >
                          <div className="icon-span-class">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              style={{ marginRight: "10px" }}
                              fill="currentColor"
                              className="bi bi-cc-circle"
                              viewBox="0 0 16 16"
                            >
                              <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.408 5.89c-.83 0-1.318.64-1.318 1.753v.742c0 1.108.479 1.727 1.318 1.727.69 0 1.138-.435 1.187-1.05h1.147v.114c-.058 1.147-1.029 1.938-2.343 1.938-1.612 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.319 0 2.29.812 2.343 1.999v.11H6.595c-.049-.638-.506-1.108-1.187-1.108Zm5.404 0c-.831 0-1.319.64-1.319 1.753v.742c0 1.108.48 1.727 1.319 1.727.69 0 1.138-.435 1.186-1.05h1.147v.114c-.057 1.147-1.028 1.938-2.342 1.938-1.613 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.318 0 2.29.812 2.342 1.999v.11h-1.147c-.048-.638-.505-1.108-1.186-1.108Z" />
                            </svg>
                            <span>Mobile Phones and Tablets</span>
                          </div>
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          href="/user-profile/"
                          className={`nav-link ${
                            currentPath == "/user-profile/" && "active"
                          }`}
                        >
                          <div className="icon-span-class">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              style={{ marginRight: "10px" }}
                              fill="currentColor"
                              className="bi bi-cc-circle"
                              viewBox="0 0 16 16"
                            >
                              <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.408 5.89c-.83 0-1.318.64-1.318 1.753v.742c0 1.108.479 1.727 1.318 1.727.69 0 1.138-.435 1.187-1.05h1.147v.114c-.058 1.147-1.029 1.938-2.343 1.938-1.612 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.319 0 2.29.812 2.343 1.999v.11H6.595c-.049-.638-.506-1.108-1.187-1.108Zm5.404 0c-.831 0-1.319.64-1.319 1.753v.742c0 1.108.48 1.727 1.319 1.727.69 0 1.138-.435 1.186-1.05h1.147v.114c-.057 1.147-1.028 1.938-2.342 1.938-1.613 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.318 0 2.29.812 2.342 1.999v.11h-1.147c-.048-.638-.505-1.108-1.186-1.108Z" />
                            </svg>
                            <span>Computers and Accessories</span>
                          </div>
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          href="/user-profile/"
                          className={`nav-link ${
                            currentPath == "/user-profile/" && "active"
                          }`}
                        >
                          <div className="icon-span-class">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              style={{ marginRight: "10px" }}
                              fill="currentColor"
                              className="bi bi-cc-circle"
                              viewBox="0 0 16 16"
                            >
                              <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.408 5.89c-.83 0-1.318.64-1.318 1.753v.742c0 1.108.479 1.727 1.318 1.727.69 0 1.138-.435 1.187-1.05h1.147v.114c-.058 1.147-1.029 1.938-2.343 1.938-1.612 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.319 0 2.29.812 2.343 1.999v.11H6.595c-.049-.638-.506-1.108-1.187-1.108Zm5.404 0c-.831 0-1.319.64-1.319 1.753v.742c0 1.108.48 1.727 1.319 1.727.69 0 1.138-.435 1.186-1.05h1.147v.114c-.057 1.147-1.028 1.938-2.342 1.938-1.613 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.318 0 2.29.812 2.342 1.999v.11h-1.147c-.048-.638-.505-1.108-1.186-1.108Z" />
                            </svg>
                            <span>Electronics and Accessories</span>
                          </div>
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          href="/user-profile/"
                          className={`nav-link ${
                            currentPath == "/user-profile/" && "active"
                          }`}
                        >
                          <div className="icon-span-class">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              style={{ marginRight: "10px" }}
                              fill="currentColor"
                              className="bi bi-cc-circle"
                              viewBox="0 0 16 16"
                            >
                              <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.408 5.89c-.83 0-1.318.64-1.318 1.753v.742c0 1.108.479 1.727 1.318 1.727.69 0 1.138-.435 1.187-1.05h1.147v.114c-.058 1.147-1.029 1.938-2.343 1.938-1.612 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.319 0 2.29.812 2.343 1.999v.11H6.595c-.049-.638-.506-1.108-1.187-1.108Zm5.404 0c-.831 0-1.319.64-1.319 1.753v.742c0 1.108.48 1.727 1.319 1.727.69 0 1.138-.435 1.186-1.05h1.147v.114c-.057 1.147-1.028 1.938-2.342 1.938-1.613 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.318 0 2.29.812 2.342 1.999v.11h-1.147c-.048-.638-.505-1.108-1.186-1.108Z" />
                            </svg>
                            <span>Home, Furniture and Appliances</span>
                          </div>
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          href="/user-profile/"
                          className={`nav-link ${
                            currentPath == "/user-profile/" && "active"
                          }`}
                        >
                          <div className="icon-span-class">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              style={{ marginRight: "10px" }}
                              fill="currentColor"
                              className="bi bi-cc-circle"
                              viewBox="0 0 16 16"
                            >
                              <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.408 5.89c-.83 0-1.318.64-1.318 1.753v.742c0 1.108.479 1.727 1.318 1.727.69 0 1.138-.435 1.187-1.05h1.147v.114c-.058 1.147-1.029 1.938-2.343 1.938-1.612 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.319 0 2.29.812 2.343 1.999v.11H6.595c-.049-.638-.506-1.108-1.187-1.108Zm5.404 0c-.831 0-1.319.64-1.319 1.753v.742c0 1.108.48 1.727 1.319 1.727.69 0 1.138-.435 1.186-1.05h1.147v.114c-.057 1.147-1.028 1.938-2.342 1.938-1.613 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.318 0 2.29.812 2.342 1.999v.11h-1.147c-.048-.638-.505-1.108-1.186-1.108Z" />
                            </svg>
                            <span>Clothing and Fashion</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="dropdown-toggle nav-link">
                      Places
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a
                          href="/dashboard/"
                          className={`nav-link ${
                            currentPath == "/dashboard/" && "active"
                          }`}
                        >
                          <div className="icon-span-class">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              style={{ marginRight: "10px" }}
                              fill="currentColor"
                              className="bi bi-cc-circle"
                              viewBox="0 0 16 16"
                            >
                              <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.408 5.89c-.83 0-1.318.64-1.318 1.753v.742c0 1.108.479 1.727 1.318 1.727.69 0 1.138-.435 1.187-1.05h1.147v.114c-.058 1.147-1.029 1.938-2.343 1.938-1.612 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.319 0 2.29.812 2.343 1.999v.11H6.595c-.049-.638-.506-1.108-1.187-1.108Zm5.404 0c-.831 0-1.319.64-1.319 1.753v.742c0 1.108.48 1.727 1.319 1.727.69 0 1.138-.435 1.186-1.05h1.147v.114c-.057 1.147-1.028 1.938-2.342 1.938-1.613 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.318 0 2.29.812 2.342 1.999v.11h-1.147c-.048-.638-.505-1.108-1.186-1.108Z" />
                            </svg>
                            <span>Restaurants</span>
                          </div>
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          href="/dashboard/messages/"
                          className={`nav-link ${
                            currentPath == "/dashboard/messages/" && "active"
                          }`}
                        >
                          <div className="icon-span-class">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              style={{ marginRight: "10px" }}
                              fill="currentColor"
                              className="bi bi-cc-circle"
                              viewBox="0 0 16 16"
                            >
                              <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.408 5.89c-.83 0-1.318.64-1.318 1.753v.742c0 1.108.479 1.727 1.318 1.727.69 0 1.138-.435 1.187-1.05h1.147v.114c-.058 1.147-1.029 1.938-2.343 1.938-1.612 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.319 0 2.29.812 2.343 1.999v.11H6.595c-.049-.638-.506-1.108-1.187-1.108Zm5.404 0c-.831 0-1.319.64-1.319 1.753v.742c0 1.108.48 1.727 1.319 1.727.69 0 1.138-.435 1.186-1.05h1.147v.114c-.057 1.147-1.028 1.938-2.342 1.938-1.613 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.318 0 2.29.812 2.342 1.999v.11h-1.147c-.048-.638-.505-1.108-1.186-1.108Z" />
                            </svg>
                            <span>Breakfast and Brunch</span>
                          </div>
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          href="/dashboard/bookings/"
                          className={`nav-link ${
                            currentPath == "/dashboard/bookings/" && "active"
                          }`}
                        >
                          <div className="icon-span-class">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              style={{ marginRight: "10px" }}
                              fill="currentColor"
                              className="bi bi-cc-circle"
                              viewBox="0 0 16 16"
                            >
                              <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.408 5.89c-.83 0-1.318.64-1.318 1.753v.742c0 1.108.479 1.727 1.318 1.727.69 0 1.138-.435 1.187-1.05h1.147v.114c-.058 1.147-1.029 1.938-2.343 1.938-1.612 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.319 0 2.29.812 2.343 1.999v.11H6.595c-.049-.638-.506-1.108-1.187-1.108Zm5.404 0c-.831 0-1.319.64-1.319 1.753v.742c0 1.108.48 1.727 1.319 1.727.69 0 1.138-.435 1.186-1.05h1.147v.114c-.057 1.147-1.028 1.938-2.342 1.938-1.613 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.318 0 2.29.812 2.342 1.999v.11h-1.147c-.048-.638-.505-1.108-1.186-1.108Z" />
                            </svg>
                            <span>Bars and Lounges</span>
                          </div>
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          href="/dashboard/wallet/"
                          className={`nav-link ${
                            currentPath == "/dashboard/wallet/" && "active"
                          }`}
                        >
                          <div className="icon-span-class">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              style={{ marginRight: "10px" }}
                              fill="currentColor"
                              className="bi bi-cc-circle"
                              viewBox="0 0 16 16"
                            >
                              <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.408 5.89c-.83 0-1.318.64-1.318 1.753v.742c0 1.108.479 1.727 1.318 1.727.69 0 1.138-.435 1.187-1.05h1.147v.114c-.058 1.147-1.029 1.938-2.343 1.938-1.612 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.319 0 2.29.812 2.343 1.999v.11H6.595c-.049-.638-.506-1.108-1.187-1.108Zm5.404 0c-.831 0-1.319.64-1.319 1.753v.742c0 1.108.48 1.727 1.319 1.727.69 0 1.138-.435 1.186-1.05h1.147v.114c-.057 1.147-1.028 1.938-2.342 1.938-1.613 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.318 0 2.29.812 2.342 1.999v.11h-1.147c-.048-.638-.505-1.108-1.186-1.108Z" />
                            </svg>
                            <span>Hotel and Lodging</span>
                          </div>
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          href="/dashboard/my-listing/active/"
                          className={`nav-link ${
                            currentPath == "/dashboard/my-listing/active/" &&
                            "active"
                          }`}
                        >
                          <div className="icon-span-class">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              style={{ marginRight: "10px" }}
                              fill="currentColor"
                              className="bi bi-cc-circle"
                              viewBox="0 0 16 16"
                            >
                              <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.408 5.89c-.83 0-1.318.64-1.318 1.753v.742c0 1.108.479 1.727 1.318 1.727.69 0 1.138-.435 1.187-1.05h1.147v.114c-.058 1.147-1.029 1.938-2.343 1.938-1.612 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.319 0 2.29.812 2.343 1.999v.11H6.595c-.049-.638-.506-1.108-1.187-1.108Zm5.404 0c-.831 0-1.319.64-1.319 1.753v.742c0 1.108.48 1.727 1.319 1.727.69 0 1.138-.435 1.186-1.05h1.147v.114c-.057 1.147-1.028 1.938-2.342 1.938-1.613 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.318 0 2.29.812 2.342 1.999v.11h-1.147c-.048-.638-.505-1.108-1.186-1.108Z" />
                            </svg>
                            <span>Gym, Wellness and Fitness</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="dropdown-toggle nav-link">
                      Events
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a
                          href="/dashboard/"
                          className={`nav-link ${
                            currentPath == "/dashboard/" && "active"
                          }`}
                        >
                          <div className="icon-span-class">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              style={{ marginRight: "10px" }}
                              fill="currentColor"
                              className="bi bi-cc-circle"
                              viewBox="0 0 16 16"
                            >
                              <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.408 5.89c-.83 0-1.318.64-1.318 1.753v.742c0 1.108.479 1.727 1.318 1.727.69 0 1.138-.435 1.187-1.05h1.147v.114c-.058 1.147-1.029 1.938-2.343 1.938-1.612 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.319 0 2.29.812 2.343 1.999v.11H6.595c-.049-.638-.506-1.108-1.187-1.108Zm5.404 0c-.831 0-1.319.64-1.319 1.753v.742c0 1.108.48 1.727 1.319 1.727.69 0 1.138-.435 1.186-1.05h1.147v.114c-.057 1.147-1.028 1.938-2.342 1.938-1.613 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.318 0 2.29.812 2.342 1.999v.11h-1.147c-.048-.638-.505-1.108-1.186-1.108Z" />
                            </svg>
                            <span>Music</span>
                          </div>
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          href="/dashboard/messages/"
                          className={`nav-link ${
                            currentPath == "/dashboard/messages/" && "active"
                          }`}
                        >
                          <div className="icon-span-class">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              style={{ marginRight: "10px" }}
                              fill="currentColor"
                              className="bi bi-cc-circle"
                              viewBox="0 0 16 16"
                            >
                              <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.408 5.89c-.83 0-1.318.64-1.318 1.753v.742c0 1.108.479 1.727 1.318 1.727.69 0 1.138-.435 1.187-1.05h1.147v.114c-.058 1.147-1.029 1.938-2.343 1.938-1.612 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.319 0 2.29.812 2.343 1.999v.11H6.595c-.049-.638-.506-1.108-1.187-1.108Zm5.404 0c-.831 0-1.319.64-1.319 1.753v.742c0 1.108.48 1.727 1.319 1.727.69 0 1.138-.435 1.186-1.05h1.147v.114c-.057 1.147-1.028 1.938-2.342 1.938-1.613 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.318 0 2.29.812 2.342 1.999v.11h-1.147c-.048-.638-.505-1.108-1.186-1.108Z" />
                            </svg>
                            <span>Nightlife</span>
                          </div>
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          href="/dashboard/bookings/"
                          className={`nav-link ${
                            currentPath == "/dashboard/bookings/" && "active"
                          }`}
                        >
                          <div className="icon-span-class">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              style={{ marginRight: "10px" }}
                              fill="currentColor"
                              className="bi bi-cc-circle"
                              viewBox="0 0 16 16"
                            >
                              <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.408 5.89c-.83 0-1.318.64-1.318 1.753v.742c0 1.108.479 1.727 1.318 1.727.69 0 1.138-.435 1.187-1.05h1.147v.114c-.058 1.147-1.029 1.938-2.343 1.938-1.612 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.319 0 2.29.812 2.343 1.999v.11H6.595c-.049-.638-.506-1.108-1.187-1.108Zm5.404 0c-.831 0-1.319.64-1.319 1.753v.742c0 1.108.48 1.727 1.319 1.727.69 0 1.138-.435 1.186-1.05h1.147v.114c-.057 1.147-1.028 1.938-2.342 1.938-1.613 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.318 0 2.29.812 2.342 1.999v.11h-1.147c-.048-.638-.505-1.108-1.186-1.108Z" />
                            </svg>
                            <span>Food and Drink</span>
                          </div>
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          href="/dashboard/wallet/"
                          className={`nav-link ${
                            currentPath == "/dashboard/wallet/" && "active"
                          }`}
                        >
                          <div className="icon-span-class">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              style={{ marginRight: "10px" }}
                              fill="currentColor"
                              className="bi bi-cc-circle"
                              viewBox="0 0 16 16"
                            >
                              <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.408 5.89c-.83 0-1.318.64-1.318 1.753v.742c0 1.108.479 1.727 1.318 1.727.69 0 1.138-.435 1.187-1.05h1.147v.114c-.058 1.147-1.029 1.938-2.343 1.938-1.612 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.319 0 2.29.812 2.343 1.999v.11H6.595c-.049-.638-.506-1.108-1.187-1.108Zm5.404 0c-.831 0-1.319.64-1.319 1.753v.742c0 1.108.48 1.727 1.319 1.727.69 0 1.138-.435 1.186-1.05h1.147v.114c-.057 1.147-1.028 1.938-2.342 1.938-1.613 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.318 0 2.29.812 2.342 1.999v.11h-1.147c-.048-.638-.505-1.108-1.186-1.108Z" />
                            </svg>
                            <span>Performing and Visual Arts</span>
                          </div>
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          href="/dashboard/my-listing/active/"
                          className={`nav-link ${
                            currentPath == "/dashboard/my-listing/active/" &&
                            "active"
                          }`}
                        >
                          <div className="icon-span-class">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              style={{ marginRight: "10px" }}
                              fill="currentColor"
                              className="bi bi-cc-circle"
                              viewBox="0 0 16 16"
                            >
                              <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.408 5.89c-.83 0-1.318.64-1.318 1.753v.742c0 1.108.479 1.727 1.318 1.727.69 0 1.138-.435 1.187-1.05h1.147v.114c-.058 1.147-1.029 1.938-2.343 1.938-1.612 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.319 0 2.29.812 2.343 1.999v.11H6.595c-.049-.638-.506-1.108-1.187-1.108Zm5.404 0c-.831 0-1.319.64-1.319 1.753v.742c0 1.108.48 1.727 1.319 1.727.69 0 1.138-.435 1.186-1.05h1.147v.114c-.057 1.147-1.028 1.938-2.342 1.938-1.613 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.318 0 2.29.812 2.342 1.999v.11h-1.147c-.048-.638-.505-1.108-1.186-1.108Z" />
                            </svg>
                            <span>Science and Technology</span>
                          </div>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="/dashboard/my-listing/active/"
                          className={`nav-link ${
                            currentPath == "/dashboard/my-listing/active/" &&
                            "active"
                          }`}
                        >
                          <div className="icon-span-class">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              style={{ marginRight: "10px" }}
                              fill="currentColor"
                              className="bi bi-cc-circle"
                              viewBox="0 0 16 16"
                            >
                              <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.408 5.89c-.83 0-1.318.64-1.318 1.753v.742c0 1.108.479 1.727 1.318 1.727.69 0 1.138-.435 1.187-1.05h1.147v.114c-.058 1.147-1.029 1.938-2.343 1.938-1.612 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.319 0 2.29.812 2.343 1.999v.11H6.595c-.049-.638-.506-1.108-1.187-1.108Zm5.404 0c-.831 0-1.319.64-1.319 1.753v.742c0 1.108.48 1.727 1.319 1.727.69 0 1.138-.435 1.186-1.05h1.147v.114c-.057 1.147-1.028 1.938-2.342 1.938-1.613 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.318 0 2.29.812 2.342 1.999v.11h-1.147c-.048-.638-.505-1.108-1.186-1.108Z" />
                            </svg>
                            <span>Health</span>
                          </div>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="/dashboard/my-listing/active/"
                          className={`nav-link ${
                            currentPath == "/dashboard/my-listing/active/" &&
                            "active"
                          }`}
                        >
                          <div className="icon-span-class">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              style={{ marginRight: "10px" }}
                              fill="currentColor"
                              className="bi bi-cc-circle"
                              viewBox="0 0 16 16"
                            >
                              <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.408 5.89c-.83 0-1.318.64-1.318 1.753v.742c0 1.108.479 1.727 1.318 1.727.69 0 1.138-.435 1.187-1.05h1.147v.114c-.058 1.147-1.029 1.938-2.343 1.938-1.612 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.319 0 2.29.812 2.343 1.999v.11H6.595c-.049-.638-.506-1.108-1.187-1.108Zm5.404 0c-.831 0-1.319.64-1.319 1.753v.742c0 1.108.48 1.727 1.319 1.727.69 0 1.138-.435 1.186-1.05h1.147v.114c-.057 1.147-1.028 1.938-2.342 1.938-1.613 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.318 0 2.29.812 2.342 1.999v.11h-1.147c-.048-.638-.505-1.108-1.186-1.108Z" />
                            </svg>
                            <span>Hobbies</span>
                          </div>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="/dashboard/my-listing/active/"
                          className={`nav-link ${
                            currentPath == "/dashboard/my-listing/active/" &&
                            "active"
                          }`}
                        >
                          <div className="icon-span-class">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              style={{ marginRight: "10px" }}
                              fill="currentColor"
                              className="bi bi-cc-circle"
                              viewBox="0 0 16 16"
                            >
                              <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.408 5.89c-.83 0-1.318.64-1.318 1.753v.742c0 1.108.479 1.727 1.318 1.727.69 0 1.138-.435 1.187-1.05h1.147v.114c-.058 1.147-1.029 1.938-2.343 1.938-1.612 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.319 0 2.29.812 2.343 1.999v.11H6.595c-.049-.638-.506-1.108-1.187-1.108Zm5.404 0c-.831 0-1.319.64-1.319 1.753v.742c0 1.108.48 1.727 1.319 1.727.69 0 1.138-.435 1.186-1.05h1.147v.114c-.057 1.147-1.028 1.938-2.342 1.938-1.613 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.318 0 2.29.812 2.342 1.999v.11h-1.147c-.048-.638-.505-1.108-1.186-1.108Z" />
                            </svg>
                            <span>Business</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="dropdown-toggle nav-link">
                      Peoples
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a
                          href="/dashboard/"
                          className={`nav-link ${
                            currentPath == "/dashboard/" && "active"
                          }`}
                        >
                          <div className="icon-span-class">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              style={{ marginRight: "10px" }}
                              fill="currentColor"
                              className="bi bi-cc-circle"
                              viewBox="0 0 16 16"
                            >
                              <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.408 5.89c-.83 0-1.318.64-1.318 1.753v.742c0 1.108.479 1.727 1.318 1.727.69 0 1.138-.435 1.187-1.05h1.147v.114c-.058 1.147-1.029 1.938-2.343 1.938-1.612 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.319 0 2.29.812 2.343 1.999v.11H6.595c-.049-.638-.506-1.108-1.187-1.108Zm5.404 0c-.831 0-1.319.64-1.319 1.753v.742c0 1.108.48 1.727 1.319 1.727.69 0 1.138-.435 1.186-1.05h1.147v.114c-.057 1.147-1.028 1.938-2.342 1.938-1.613 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.318 0 2.29.812 2.342 1.999v.11h-1.147c-.048-.638-.505-1.108-1.186-1.108Z" />
                            </svg>
                            <span>Contractors</span>
                          </div>
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          href="/dashboard/messages/"
                          className={`nav-link ${
                            currentPath == "/dashboard/messages/" && "active"
                          }`}
                        >
                          <div className="icon-span-class">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              style={{ marginRight: "10px" }}
                              fill="currentColor"
                              className="bi bi-cc-circle"
                              viewBox="0 0 16 16"
                            >
                              <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.408 5.89c-.83 0-1.318.64-1.318 1.753v.742c0 1.108.479 1.727 1.318 1.727.69 0 1.138-.435 1.187-1.05h1.147v.114c-.058 1.147-1.029 1.938-2.343 1.938-1.612 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.319 0 2.29.812 2.343 1.999v.11H6.595c-.049-.638-.506-1.108-1.187-1.108Zm5.404 0c-.831 0-1.319.64-1.319 1.753v.742c0 1.108.48 1.727 1.319 1.727.69 0 1.138-.435 1.186-1.05h1.147v.114c-.057 1.147-1.028 1.938-2.342 1.938-1.613 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.318 0 2.29.812 2.342 1.999v.11h-1.147c-.048-.638-.505-1.108-1.186-1.108Z" />
                            </svg>
                            <span>Electricians</span>
                          </div>
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          href="/dashboard/bookings/"
                          className={`nav-link ${
                            currentPath == "/dashboard/bookings/" && "active"
                          }`}
                        >
                          <div className="icon-span-class">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              style={{ marginRight: "10px" }}
                              fill="currentColor"
                              className="bi bi-cc-circle"
                              viewBox="0 0 16 16"
                            >
                              <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.408 5.89c-.83 0-1.318.64-1.318 1.753v.742c0 1.108.479 1.727 1.318 1.727.69 0 1.138-.435 1.187-1.05h1.147v.114c-.058 1.147-1.029 1.938-2.343 1.938-1.612 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.319 0 2.29.812 2.343 1.999v.11H6.595c-.049-.638-.506-1.108-1.187-1.108Zm5.404 0c-.831 0-1.319.64-1.319 1.753v.742c0 1.108.48 1.727 1.319 1.727.69 0 1.138-.435 1.186-1.05h1.147v.114c-.057 1.147-1.028 1.938-2.342 1.938-1.613 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.318 0 2.29.812 2.342 1.999v.11h-1.147c-.048-.638-.505-1.108-1.186-1.108Z" />
                            </svg>
                            <span>Plumbers</span>
                          </div>
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          href="/dashboard/wallet/"
                          className={`nav-link ${
                            currentPath == "/dashboard/wallet/" && "active"
                          }`}
                        >
                          <div className="icon-span-class">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              style={{ marginRight: "10px" }}
                              fill="currentColor"
                              className="bi bi-cc-circle"
                              viewBox="0 0 16 16"
                            >
                              <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.408 5.89c-.83 0-1.318.64-1.318 1.753v.742c0 1.108.479 1.727 1.318 1.727.69 0 1.138-.435 1.187-1.05h1.147v.114c-.058 1.147-1.029 1.938-2.343 1.938-1.612 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.319 0 2.29.812 2.343 1.999v.11H6.595c-.049-.638-.506-1.108-1.187-1.108Zm5.404 0c-.831 0-1.319.64-1.319 1.753v.742c0 1.108.48 1.727 1.319 1.727.69 0 1.138-.435 1.186-1.05h1.147v.114c-.057 1.147-1.028 1.938-2.342 1.938-1.613 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.318 0 2.29.812 2.342 1.999v.11h-1.147c-.048-.638-.505-1.108-1.186-1.108Z" />
                            </svg>
                            <span>Lock and Key</span>
                          </div>
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          href="/dashboard/my-listing/active/"
                          className={`nav-link ${
                            currentPath == "/dashboard/my-listing/active/" &&
                            "active"
                          }`}
                        >
                          <div className="icon-span-class">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              style={{ marginRight: "10px" }}
                              fill="currentColor"
                              className="bi bi-cc-circle"
                              viewBox="0 0 16 16"
                            >
                              <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.408 5.89c-.83 0-1.318.64-1.318 1.753v.742c0 1.108.479 1.727 1.318 1.727.69 0 1.138-.435 1.187-1.05h1.147v.114c-.058 1.147-1.029 1.938-2.343 1.938-1.612 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.319 0 2.29.812 2.343 1.999v.11H6.595c-.049-.638-.506-1.108-1.187-1.108Zm5.404 0c-.831 0-1.319.64-1.319 1.753v.742c0 1.108.48 1.727 1.319 1.727.69 0 1.138-.435 1.186-1.05h1.147v.114c-.057 1.147-1.028 1.938-2.342 1.938-1.613 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.318 0 2.29.812 2.342 1.999v.11h-1.147c-.048-.638-.505-1.108-1.186-1.108Z" />
                            </svg>
                            <span>Cleaning</span>
                          </div>
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          href="/dashboard/my-listing/active/"
                          className={`nav-link ${
                            currentPath == "/dashboard/my-listing/active/" &&
                            "active"
                          }`}
                        >
                          <div className="icon-span-class">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              style={{ marginRight: "10px" }}
                              fill="currentColor"
                              className="bi bi-cc-circle"
                              viewBox="0 0 16 16"
                            >
                              <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.408 5.89c-.83 0-1.318.64-1.318 1.753v.742c0 1.108.479 1.727 1.318 1.727.69 0 1.138-.435 1.187-1.05h1.147v.114c-.058 1.147-1.029 1.938-2.343 1.938-1.612 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.319 0 2.29.812 2.343 1.999v.11H6.595c-.049-.638-.506-1.108-1.187-1.108Zm5.404 0c-.831 0-1.319.64-1.319 1.753v.742c0 1.108.48 1.727 1.319 1.727.69 0 1.138-.435 1.186-1.05h1.147v.114c-.057 1.147-1.028 1.938-2.342 1.938-1.613 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.318 0 2.29.812 2.342 1.999v.11h-1.147c-.048-.638-.505-1.108-1.186-1.108Z" />
                            </svg>
                            <span>Garden and landscaping</span>
                          </div>
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          href="/dashboard/my-listing/active/"
                          className={`nav-link ${
                            currentPath == "/dashboard/my-listing/active/" &&
                            "active"
                          }`}
                        >
                          <div className="icon-span-class">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              style={{ marginRight: "10px" }}
                              fill="currentColor"
                              className="bi bi-cc-circle"
                              viewBox="0 0 16 16"
                            >
                              <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.408 5.89c-.83 0-1.318.64-1.318 1.753v.742c0 1.108.479 1.727 1.318 1.727.69 0 1.138-.435 1.187-1.05h1.147v.114c-.058 1.147-1.029 1.938-2.343 1.938-1.612 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.319 0 2.29.812 2.343 1.999v.11H6.595c-.049-.638-.506-1.108-1.187-1.108Zm5.404 0c-.831 0-1.319.64-1.319 1.753v.742c0 1.108.48 1.727 1.319 1.727.69 0 1.138-.435 1.186-1.05h1.147v.114c-.057 1.147-1.028 1.938-2.342 1.938-1.613 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.318 0 2.29.812 2.342 1.999v.11h-1.147c-.048-.638-.505-1.108-1.186-1.108Z" />
                            </svg>
                            <span>Food and Catering</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>

                <div className="others-option d-flex align-items-center">
                  <div className="option-item">
                    <span
                      data-toggle="modal"
                      onClick={toggleAuth}
                      className="auth-one"
                    >
                      <i className="flaticon-user"></i> Login / Register
                    </span>
                  </div>

                  <div className="option-item">
                    <a
                      href="/dashboard/add-listing"
                      className="default-btn button-one"
                    >
                      <i className="flaticon-more"></i> Add Listing
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className="others-option-for-responsive">
          <div className="container">
            <div className="dot-menu" onClick={toggleMiniAuth}>
              <div className="inner">
                <div className="circle circle-one"></div>
                <div className="circle circle-two"></div>
                <div className="circle circle-three"></div>
              </div>
            </div>

            <div className={displayMiniAuth ? "container active" : "container"}>
              <div className="option-inner">
                <div className="others-option">
                  <div className="option-item">
                    <form className="navbar-search-box">
                      <label>
                        <i className="flaticon-search"></i>
                      </label>
                      <input
                        type="text"
                        className="input-search"
                        placeholder="Search..."
                      />
                    </form>
                  </div>

                  <div className="option-item">
                    <span data-toggle="modal" onClick={toggleAuth}>
                      <i className="flaticon-user"></i> Login / Register
                    </span>
                  </div>

                  <div className="option-item">
                    <a href="/dashboard/add-listing" className="default-btn">
                      <i className="flaticon-more"></i> Add Listing
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------ Auth Modal ------- */}
      <div
        className={
          displayAuth
            ? "modal loginRegisterModal show"
            : "modal loginRegisterModal"
        }
        id="loginRegisterModal"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <Tabs>
              <button type="button" className="close" onClick={toggleAuth}>
                <i className="bx bx-x"></i>
              </button>

              <ul className="nav nav-tabs" id="myTab">
                <TabList>
                  <Tab className="nav-item">
                    <a className="nav-link" id="login-tab">
                      Login
                    </a>
                  </Tab>
                  <Tab className="nav-item">
                    <a className="nav-link" id="register-tab">
                      Register
                    </a>
                  </Tab>
                </TabList>
              </ul>

              <div className="tab-content" id="myTabContent">
                <TabPanel>
                  <div className="tab-pane fade show active" id="login">
                    <div className="miran-login">
                      <div className="login-with-account">
                        <span>Login with</span>
                        <ul>
                          <li>
                            <a href="#" className="facebook">
                              <i className="bx bxl-facebook"></i> Facebook
                            </a>
                          </li>
                          <li>
                            <a href="#" className="twitter">
                              <i className="bx bxl-twitter"></i> Twitter
                            </a>
                          </li>
                        </ul>
                      </div>

                      <span className="sub-title">
                        <span>Or login with</span>
                      </span>

                      <form>
                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="Username or Email"
                            className="form-control"
                          />
                        </div>

                        <div className="form-group">
                          <input
                            type="password"
                            placeholder="Password"
                            className="form-control"
                          />
                        </div>

                        <button type="submit">Register Now</button>
                      </form>

                      <span className="dont-account">
                        Don't have an account? <a href="#">Register Now</a>
                      </span>
                    </div>
                  </div>
                </TabPanel>

                <TabPanel>
                  <div className="tab-pane" id="register">
                    <div className="miran-register">
                      <div className="register-with-account">
                        <span>Register with</span>
                        <ul>
                          <li>
                            <a href="#" className="facebook" target="_blank">
                              <i className="bx bxl-facebook"></i> Facebook
                            </a>
                          </li>
                          <li>
                            <a href="#" className="twitter" target="_blank">
                              <i className="bx bxl-twitter"></i> Twitter
                            </a>
                          </li>
                        </ul>
                      </div>

                      <span className="sub-title">
                        <span>Or Register with</span>
                      </span>

                      <form>
                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="Username"
                            className="form-control"
                          />
                        </div>

                        <div className="form-group">
                          <input
                            type="email"
                            placeholder="Email"
                            className="form-control"
                          />
                        </div>

                        <div className="form-group">
                          <input
                            type="password"
                            placeholder="Password"
                            className="form-control"
                          />
                        </div>

                        <div className="form-group">
                          <input
                            type="password"
                            placeholder="Confirm Password"
                            className="form-control"
                          />
                        </div>

                        <button type="submit">Register Now</button>
                      </form>

                      <span className="already-account">
                        Already have an account? <a href="#">Login Now</a>
                      </span>
                    </div>
                  </div>
                </TabPanel>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
