import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import '@fortawesome/fontawesome-free/css/all.min.css';
import "./ServicesNavbar1.css";

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

  return (
    <nav
      className="navbar navbar-expand-custom navbar-mainbg"
      style={{ paddingBottom: "0px", paddingTop: "0px" }}
    >
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>
          <li className="nav-item active">
            <a className="nav-link" href="javascript:void(0);">
              Proofreading
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="javascript:void(0);">
              Copyediting
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="javascript:void(0);">
              Substantive Editing
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="javascript:void(0);">
              Extensive Substantive Editing
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="javascript:void(0);">
              Plagiarism check and reduction
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="javascript:void(0);">
              A.I Reduction
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="javascript:void(0);">
              Translation Services
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default ServicesNavbar1;
