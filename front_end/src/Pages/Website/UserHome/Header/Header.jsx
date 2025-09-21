import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Cookie from "cookie-universal";
import axios from "axios";
import SearchIcon from "../Components/SearchIcon/SearchIcon";
import Aos from "aos";
const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [profileListVisible, setProfileListVisible] = useState(false);
  const [userImage, setUserImage] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const cookie = Cookie();
  const token = cookie.get("CuberWeb");

  const toggleProfileList = () => {
    setProfileListVisible(!profileListVisible);
  };

  const toggleNavbar = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const res = await axios.get(
          "https://digitopia-project-backend.vercel.app/api/personalInfo",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const data = res.data.data;
        const imageUrl = data.image
          ? `${data.image.path.replace("\\", "/")}`
          : "";
        setUserImage(imageUrl);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    if (token) fetchUserProfile();
  }, [token]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <header
      className={`header ${isScrolled ? "sticky" : ""}`}
      data-aos="fade-down"
      data-aos-duration="500"
    >
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className={isScrolled ? "container" : "container-fluid"}>
          {/* Logo */}
          <Link className="navbar-brand header__logo" to="/">
            <h2 className="header__logo-title">
              Cyber <span>Labs</span>
            </h2>
          </Link>

          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-controls="main-navbar"
            aria-expanded={isDropdownOpen}
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon
              icon={isDropdownOpen ? faXmark : faBars}
              className="primary-text "
            />
          </button>

          {/* Nav Links */}
          <div
            className={`collapse navbar-collapse ${
              isDropdownOpen ? "show" : ""
            }`}
            id="main-navbar"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                {token ? (
                  <NavLink className="nav-link " to="/home">
                    Learning
                  </NavLink>
                ) : (
                  <NavLink className="nav-link" to="/">
                    Learning
                  </NavLink>
                )}
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about-us">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#learningPath">
                  Learning Path
                </a>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>

              {/* Search Icon for small screens - placed in dropdown area */}
              <li className="nav-item dropdown-search-icon d-block d-md-none">
                <SearchIcon
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                />
              </li>
            </ul>

            {/* Right side (Search + Profile or Login/Register) */}
            <div className="d-flex align-items-center gap-3">
              {/* Search Icon for medium+ screens */}
              <div className="search-icon-container d-none d-md-flex">
                <SearchIcon
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                />
              </div>

              {token ? (
                <div className="header__profile">
                  <button
                    className="header__profile-btn"
                    onClick={toggleProfileList}
                  >
                    {userImage ? (
                      <img
                        src={userImage}
                        alt="Profile"
                        className="rounded-circle"
                        style={{ width: "50px", height: "50px" }}
                      />
                    ) : (
                      <i className="fa-solid fa-circle-user primary-text fs-2"></i>
                    )}
                  </button>
                  {profileListVisible && (
                    <div className="header__profile-dropdown">
                      <ul>
                        <li>
                          <NavLink
                            to="/dashboard/personal-information"
                            className="dropdown-item"
                          >
                            View Profile
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/dashboard/settings"
                            className="dropdown-item"
                          >
                            Manage Account
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <div className="d-flex gap-2">
                  <Link to="/login" className="btn btn-outline-light">
                    Login
                  </Link>
                  <Link to="/register" className="btn btn-success">
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
