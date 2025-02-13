import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import '@fortawesome/fontawesome-free/css/all.min.css';
import "./ServicesNavbar1.css";
import { BsJustify } from "react-icons/bs";

const ServicesNavbar1: React.FC = () => {
  useEffect(() => {
    const test = () => {
      const tabsNewAnim = document.getElementById("navbarSupportedContent");
      const activeItemNewAnim = tabsNewAnim?.querySelector(".active");
      if (activeItemNewAnim) {
        const activeWidthNewAnimHeight = activeItemNewAnim.clientHeight;
        const activeWidthNewAnimWidth = activeItemNewAnim.clientWidth;
        const itemPosNewAnimTop = (activeItemNewAnim as HTMLElement).offsetTop;
        const itemPosNewAnimLeft = (activeItemNewAnim as HTMLElement)
          .offsetLeft;

        const horiSelector = document.querySelector(
          ".hori-selector"
        ) as HTMLElement;
        if (horiSelector) {
          horiSelector.style.top = `${itemPosNewAnimTop}px`;
          horiSelector.style.left = `${itemPosNewAnimLeft}px`;
          horiSelector.style.height = `${activeWidthNewAnimHeight}px`;
          horiSelector.style.width = `${activeWidthNewAnimWidth}px`;
        }
      }

      const handleClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const li = target.closest("li");
        if (li) {
          const allLi = tabsNewAnim?.querySelectorAll("li");
          allLi?.forEach((item) => item.classList.remove("active"));
          li.classList.add("active");

          const activeWidthNewAnimHeight = li.clientHeight;
          const activeWidthNewAnimWidth = li.clientWidth;
          const itemPosNewAnimTop = (li as HTMLElement).offsetTop;
          const itemPosNewAnimLeft = (li as HTMLElement).offsetLeft;

          const horiSelector = document.querySelector(
            ".hori-selector"
          ) as HTMLElement;
          if (horiSelector) {
            horiSelector.style.top = `${itemPosNewAnimTop}px`;
            horiSelector.style.left = `${itemPosNewAnimLeft}px`;
            horiSelector.style.height = `${activeWidthNewAnimHeight}px`;
            horiSelector.style.width = `${activeWidthNewAnimWidth}px`;
          }
        }
      };

      tabsNewAnim?.addEventListener("click", handleClick);
      return () => {
        tabsNewAnim?.removeEventListener("click", handleClick);
      };
    };

    test();
    window.addEventListener("resize", test);
    return () => {
      window.removeEventListener("resize", test);
    };
  }, []);


  const NavbarAlign = {
    display:"flex !important",
   justifyContent:"center" ,
   alignItems:"center"


  }

  return (
    <nav
      className="navbar navbar-expand-custom navbar-mainbg"
      style={{ paddingBottom: "0px", paddingTop: "0px" }}
    >
      {/* <a className="navbar-brand navbar-logo" href="#">Menu 2</a>
      <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-white"></i>

      </button> */}
      <div className="collapse navbar-collapse" style={NavbarAlign} id="navbarSupportedContent">
        <ul className="navbar-nav">
          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>
          <li className="nav-item active">
            <a className="nav-link" href="javascript:void(0);">
              {/* <i className="fas fa-tachometer-alt"></i> */}
              Proofreading
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="javascript:void(0);">
              {/* <i className="far fa-address-book"></i> */}
              Copyediting
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="javascript:void(0);">
              {/* <i className="far fa-clone"></i> */}
              Substantive Editing
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="javascript:void(0);">
              {/* <i className="far fa-calendar-alt"></i> */}
              Extensive Substantive Editing
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="javascript:void(0);">
              {/* <i className="far fa-chart-bar"></i> */}
              Plagiarism check and reduction
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="javascript:void(0);">
              {/* <i className="far fa-copy"></i> */}
              A.I Reduction
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="javascript:void(0);">
              {/* <i className="far fa-copy"></i> */}
              Translation Services
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default ServicesNavbar1;
