import React, { useEffect, useState } from 'react';
import './header.css'; // Import your CSS here
import data from '../../utils/navbarData';
import TabDropdownData from './TabDropdownData';
import Link from 'next/link';

const Header = () => {
  const [showInput, setShowInput] = useState(false);
  const [navLeft, setNavLeft] = useState('-100%');
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [tabs, setTabs] = useState<string>("");
  const [tabData, setTabData] = useState<any>([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [navScroll, setnavScroll] = useState<number>(0)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      setnavScroll(window.scrollY)
    })
  }, [])

  useEffect(() => {
    const tab_data = data.filter(val => val.mainHeader === tabs);
    setTabData(tab_data);
  }, [tabs]);

  const toggleSearch = () => {
    setShowInput(!showInput);
  };

  const openMenu = () => {
    setNavLeft('0');
  };

  const closeMenu = () => {
    setNavLeft('-100%');
  };

  const toggleSubMenu = (menu: string) => {
    setOpenSubMenu(prevState => (prevState === menu ? null : menu));
  };

  const tabHandler = (value: string): void => {
    setTabs(value);
  };

  const getMenuClassName = (menu: string) => {
    if (isMobile) {
      return 'sub-menu';
    } else {
      return menu === 'services' ? 'sub-menu' : 'sub-menu1';
    }
  };

  console.log({ navScroll })

  return (

    <>
      <div className="header_top_menu pt-2 pb-2 bg_color">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-sm-8">
              <div className="header_top_menu_address">
                <div className="header_top_menu_address_inner">
                  <ul>
                    <li>
                      <a href="tel:+919040023003" style={{textDecoration:"none"}} >
                        <i className="fa fa-phone"></i>+91-904-002-3003 (IN)
                      </a>
                      <i className="fa fa-phone" style={{ marginLeft: '8px' , color:"aliceblue" }}></i>
                      <a href="tel:+919237304004" style={{textDecoration:"none"}} >
                        +91-923-730-4004 (IN)
                      </a>
                      <i className="fa fa-phone" style={{ marginLeft: '8px' , color:"aliceblue" }}></i>
                      <a href="tel:+16469163476" style={{textDecoration:"none"}} >
                        +1 (646) 916-3476 (USA)
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4">
              <div className="header_top_menu_icon">
                <div className="header_top_menu_icon_inner">
                  <ul>
                    <li>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Manuscriptedit">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" rel="noopener noreferrer" href="https://x.com/i/flow/login?redirect_after_login=%2Fmanuscriptedit">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/manuscriptedit/">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@manuscriptedit.">
                        <i className="fa fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav style={{ position: navScroll === 0 ? 'relative' : 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
        <div className="navbar">
          <div className="logo"><Link href="/"><img src="/images/NavbarLogo/1 (1).png" alt="" /></Link></div>
          <div className="nav-links" style={{ left: navLeft }}>
            <div className="sidebar-logo">
              <span className="logo-name"><img src="/images/NavbarLogo/1 (1).png" alt="" /></span>
              <i className='bx bx-x' onClick={closeMenu}></i>
            </div>
            <div className='TooglebarLinks'>
              <ul className="links">
                <li>
                  <a href="#" onMouseEnter={() => tabHandler("SERVICES")} onClick={() => tabHandler("SERVICES")}>Services</a>
                  <i
                    className={`bx bxs-chevron-down htmlcss-arrow arrow ${openSubMenu === 'services' ? 'rotate' : ''}`}
                    onClick={() => {
                      toggleSubMenu('services');
                      tabHandler('SERVICES');
                    }}
                  ></i>

                  <ul className={`htmlCss-sub-menu ${getMenuClassName('services')} ${openSubMenu === 'services' ? 'show' : ''}`} >
                    {tabs === "SERVICES" && tabData && tabData.length ? <TabDropdownData tabData={tabData} setTabs={setTabs} tabs={tabs} /> : ""}
                  </ul>
                </li>

                <li>
                  <a href="#" onMouseEnter={() => tabHandler("QUALITY")} onClick={() => tabHandler('QUALITY')}>Quality</a>
                  <i
                    className={`bx bxs-chevron-down htmlcss-arrow arrow ${openSubMenu === 'quality' ? 'rotate' : ''}`}
                    onClick={() => {
                      toggleSubMenu('quality');
                      tabHandler('QUALITY');
                    }}
                  ></i>
                  <ul className={`htmlCss-sub-menu ${getMenuClassName('quality')} ${openSubMenu === 'quality' ? 'show' : ''}`} style={{ background: "#F7FFF5" }}>
                    {tabs === "QUALITY" && tabData && tabData.length ? <TabDropdownData tabData={tabData} setTabs={setTabs} tabs={tabs} /> : ""}
                  </ul>
                </li>

                <li>
                  <a href="#" onMouseEnter={() => tabHandler("SUBMIT MANUSCRIPT")} onClick={() => tabHandler('SUBMIT MANUSCRIPT')}>Submit Manuscript</a>
                  <i
                    className={`bx bxs-chevron-down htmlcss-arrow arrow ${openSubMenu === 'submit' ? 'rotate' : ''}`}
                    onClick={() => {
                      toggleSubMenu('submit');
                      tabHandler('SUBMIT MANUSCRIPT');
                    }}
                  ></i>
                  <ul className={`htmlCss-sub-menu ${getMenuClassName('submit')} ${openSubMenu === 'submit' ? 'show' : ''}`} style={{ background: "#F5F8FF" }}>
                    {tabs === "SUBMIT MANUSCRIPT" && tabData && tabData.length ? <TabDropdownData tabData={tabData} setTabs={setTabs} tabs={tabs} /> : ""}
                  </ul>
                </li>

                <li>
                  <a href="#" onMouseEnter={() => tabHandler("EDITOR")} onClick={() => tabHandler('EDITOR')} >Editor</a>
                  <i
                    className={`bx bxs-chevron-down htmlcss-arrow arrow ${openSubMenu === 'editor' ? 'rotate' : ''}`}
                    onClick={() => {
                      toggleSubMenu('editor');
                      tabHandler('EDITOR');
                    }}
                  ></i>
                  <ul className={`htmlCss-sub-menu ${getMenuClassName('editor')} ${openSubMenu === 'editor' ? 'show' : ''}`} style={{ background: "#F7FFF5" }}>
                    {tabs === "EDITOR" && tabData && tabData.length ? <TabDropdownData tabData={tabData} setTabs={setTabs} tabs={tabs} /> : ""}
                  </ul>
                </li>

                <li>
                  <a href="#" onMouseEnter={() => tabHandler("MORE")} onClick={() => tabHandler('MORE')}>More</a>
                  <i
                    className={`bx bxs-chevron-down htmlcss-arrow arrow ${openSubMenu === 'more1' ? 'rotate' : ''}`}
                    onClick={() => {
                      toggleSubMenu('more1');
                      tabHandler('MORE');
                    }}
                  ></i>
                  <ul className={`htmlCss-sub-menu ${getMenuClassName('more1')} ${openSubMenu === 'more1' ? 'show' : ''}`} style={{ background: "#FFF5F5" }}>
                    {tabs === "MORE" && tabData && tabData.length ? <TabDropdownData tabData={tabData} setTabs={setTabs} tabs={tabs} /> : ""}
                  </ul>
                </li>

                <li className='donate-btn-header' style={{ marginLeft: "0px", paddingLeft: "0px", paddingRight: "0px" }}>
                  <a className="dtbtn" href="https://secure.manuscriptedit.com/register" style={{ height: "40px", display: "flex", alignItems: "center", color: 'white' }}>Sign Up | Sign In</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="search-box">
            <i className='bx bx-menu' onClick={openMenu}></i>
          </div>
        </div>
      </nav>


    </>









  );
};

export default Header;
