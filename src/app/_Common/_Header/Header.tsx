import React, { useEffect, useState } from 'react';
import './header.css'; // Import your CSS here
import data from '../../utils/navbarData';
import TabDropdownData from './TabDropdownData';

const Header = () => {
  const [showInput, setShowInput] = useState(false);
  const [navLeft, setNavLeft] = useState('-100%');
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [tabs, setTabs] = useState<string>("");
  const [tabData, setTabData] = useState<any>([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

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

  return (


   
      

      <nav>
        <div className="navbar">
          <div className="logo"><a href="#"><img src="/images/NavbarLogo/1 (1).png" alt="" /></a></div>
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
                  <a className="dtbtn" href="#" style={{ height: "40px", display: "flex", alignItems: "center", color: 'white' }}>Sign Up | Sign In</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="search-box">
            <i className='bx bx-menu' onClick={openMenu}></i>
          </div>
        </div>
      </nav>


  


  );
};

export default Header;
