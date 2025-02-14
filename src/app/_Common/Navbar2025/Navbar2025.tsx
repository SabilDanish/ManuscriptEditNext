import Link from "next/link";
import React, { useEffect, useState } from "react";
import redirect from "../_functionality/Redirect";
import "./Navbar2025.css";
import menu from "./menu";
import { map } from "jquery";
import { useRouter } from "next/router";

function Navbar2025() {
  const [activeTab1, setActiveTab1] = useState("");
  const [newNavBar2, setNewNavBar2] = useState(false);
  const [newNavBar1, setNewNavBar1] = useState(false);
  const [lastMenu, setLastMenu] = useState(false);
  const [lastMenuItems, setLastMenuItems] = useState(0);

  const [mainNavItem, setMainNavItem] = useState(5);

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
    <>
      <header className="nav-container">
        <div className="nav-logo logo">
          <Link href="/">
            <img src="/images/logoGif/Logo Animate_1.gif" alt="Company Logo" />
          </Link>
        </div>

        <nav className="nav-menu">
          <ul>
            <li>
              <Link
                href="/EditingOverview"
                onClick={() => {
                  setActiveTab1(menu[0].subMenu[0].label);
                  setNewNavBar2(true);
                  setNewNavBar1(true);
                  setMainNavItem(0);
                  setLastMenu(true);
                }}
                className={mainNavItem === 0 ? "nav-menuSelected" : ""}
              >
                SERVICES
              </Link>
            </li>
            <li>
              <Link
                href="/QualityDelivery"
                onClick={() => {
                  setActiveTab1(menu[1].subMenu[0].label);
                  setNewNavBar2(true);
                  setNewNavBar1(true);
                  setMainNavItem(1);
                  setLastMenu(false);
                }}
                className={mainNavItem === 1 ? "nav-menuSelected" : ""}
              >
                QUALITY
              </Link>
            </li>
            <li>
              <a
                onClick={() => {
                  redirect("register");
                }}
                href="#"
              >
                SUBMIT MANUSCRIPT
              </a>
            </li>
            <li>
              <Link
                href="/EditorialPanel"
                onClick={() => {
                  setActiveTab1(menu[3].subMenu[0].label);
                  setNewNavBar2(true);
                  setNewNavBar1(true);
                  setMainNavItem(3);
                  setLastMenu(false);
                }}
                className={mainNavItem === 3 ? "nav-menuSelected" : ""}
              >
                EDITOR
              </Link>
            </li>
            <li>
              <Link
                href="/About"
                onClick={() => {
                  setActiveTab1(menu[4].subMenu[0].label);
                  setNewNavBar2(true);
                  setNewNavBar1(true);
                  setMainNavItem(4);
                  setLastMenu(false);
                }}
                className={mainNavItem === 4 ? "nav-menuSelected" : ""}
              >
                ABOUT US
              </Link>
            </li>
          </ul>
        </nav>

        <div className="nav-buttons">
          <Link
            href="https://secure.manuscriptedit.com/register"
            className="navButtonz"
          >
            Sign Up | Sign In
          </Link>
          <Link
            href="https://secure.manuscriptedit.com/quotation"
            className="navButtonz"
          >
            Request A Quote
          </Link>
        </div>
      </header>

      <div className="navbar2">
        <div
          className="container"
          style={{ display: newNavBar2 ? "" : "none" }}
        >
          <ul>
            {mainNavItem !== 5
              ? menu[mainNavItem].subMenu.map((item, index) => (
                  <li
                    key={index}
                    className={
                      activeTab1 === menu[mainNavItem].subMenu[index].label
                        ? "tabSelected"
                        : ""
                    }
                    onClick={() => {
                      setActiveTab1(menu[mainNavItem].subMenu[index].label);
                      setLastMenuItems(index);
                      setLastMenu(true);
                    }}
                  >
                    {menu[mainNavItem]?.subMenu[index]?.link ? (
                      <Link href={menu[mainNavItem]?.subMenu[index]?.link}>
                        {menu[mainNavItem]?.subMenu[index]?.label}
                      </Link>
                    ) : (
                      <span>
                        {menu[mainNavItem]?.subMenu[index]?.label ||
                          "Invalid Link"}
                      </span>
                    )}
                  </li>
                ))
              : ""}
          </ul>
        </div>
      </div>
      <div className="navbar3">
        <div className="container">
          <ul>
            {lastMenu && menu[0]?.subMenu[lastMenuItems]?.subMenu
              ? menu[0].subMenu[lastMenuItems].subMenu.map((item, index) => (
                  <li key={index}>
                    {item?.link ? (
                      <Link href={item.link}>{item.label}</Link>
                    ) : (
                      <span>{item.label || "Invalid Link"}</span>
                    )}
                  </li>
                ))
              : null}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar2025;
