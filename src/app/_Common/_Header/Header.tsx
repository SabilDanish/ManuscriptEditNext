// "use client";
// import Link from "next/link";
// import "./header.css";
// import redirect, { redirectSameTab } from "../_functionality/Redirect";
// import { useRouter } from 'next/navigation';
// import { Button } from "reactstrap";
// import { useState } from "react";
// import data from '../../utils/navbarData.js'

// export default function Header() {
//   const router = useRouter();

//   const [active, setActive] = useState(false);
//   const [header, setHeader] = useState("");
//   const [navData, setNavData] = useState<any>()

//   const handleClick = (tab: string) => {
//     setActive(!active);
//     setHeader(tab)

//     let new_nav_data = data.filter(val => val.mainHeader === tab)
//     setNavData(new_nav_data)
//   };
//   return (
//     <>
//       <div className="header_top_menu pt-2 pb-2 bg_color">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-8 col-sm-8">
//               <div className="header_top_menu_address">
//                 <div className="header_top_menu_address_inner">
//                   <ul>
//                     <li>
//                       <a href="#">
//                         <i className="fa fa-phone"></i>+91-904-002-3003 (IN) <i className="fa fa-phone" style={{ marginLeft: "8px" }}></i>+91-923-730-4004 (IN) <i className="fa fa-phone" style={{ marginLeft: "8px" }}></i>+1
//                         (646)916-3476 (USA)
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-4 col-sm-4">
//               <div className="header_top_menu_icon">
//                 <div className="header_top_menu_icon_inner">
//                   <ul>
//                     <li>
//                       <Link href={"https://www.facebook.com/Manuscriptedit"} target="_blank">
//                         <i className="fa fa-facebook"></i>
//                       </Link>
//                     </li>
//                     <li>
//                       <a href="https://x.com/i/flow/login?redirect_after_login=%2Fmanuscriptedit" target="_blank">
//                         <i className="fa fa-twitter"></i>
//                       </a>
//                     </li>
//                     <li>
//                       <a href="https://www.instagram.com/manuscriptedit/" target="_blank">
//                         <i className="fa fa-instagram"></i>
//                       </a>
//                     </li>
//                     <li>
//                       <a href="https://www.youtube.com/@manuscriptedit." target="_blank">
//                         <i className="fa fa-youtube"></i>
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <nav className="navbar">
//         <h1 className="navbar-logo">
//           <Link href={"/"} className="logo">
//             <img style={{ width: "150px" }} className="down" src="/images/1.png" alt=""></img>{" "}
//             <img style={{ width: "150px" }} className="main_sticky" src="/images/1.png" alt=""></img>
//           </Link>
//         </h1>

//         <ul className={active ? "nav-menu active" : "nav-menu"}>
//           <li onMouseEnter={() => handleClick("SERVICES")} onMouseLeave={() => handleClick("")}>
//             <a href={"#"} className="nav-links">
//               SERVICES
//             </a>
//           </li>
//           <li>
//             <a href={"#"} className="nav-links">
//               QUALITY
//               {/* {active && (
//                 <div className="dropdown">
//                   <ul>
//                     <li><a href="#">Quality 1</a></li>
//                     <li><a href="#">Quality 2</a></li>
//                     <li><a href="#">Quality 3</a></li>
//                     <li><a href="#">Quality 4</a></li>
//                     <li><a href="#">Quality 5</a></li>
//                   </ul>
//                 </div>
//               )} */}
//             </a>
//           </li>
//           <li>
//             <a href={"#"} className="nav-links">
//               SUBMIT MANUSCRIPT
//               {/* {active && (
//                 <div className="dropdown">
//                   <ul>
//                     <li><a href="#">Submit Manuscript 1</a></li>
//                     <li><a href="#">Submit Manuscript 2</a></li>
//                     <li><a href="#">Submit Manuscript 3</a></li>
//                     <li><a href="#">Submit Manuscript 4</a></li>
//                     <li><a href="#">Submit Manuscript 5</a></li>
//                   </ul>
//                 </div>
//               )} */}
//             </a>
//           </li>
//           <li>
//             <a href={"#"} className="nav-links">
//               EDITOR
//               {/* {active && (
//                 <div className="dropdown">
//                   <ul>
//                     <li><a href="#">Editor 1</a></li>
//                     <li><a href="#">Editor 2</a></li>
//                     <li><a href="#">Editor 3</a></li>
//                     <li><a href="#">Editor 4</a></li>
//                     <li><a href="#">Editor 5</a></li>
//                   </ul>
//                 </div>
//               )} */}
//             </a>
//           </li>
//           <li>
//             <a href={"#"} className="nav-links">
//               MORE
//               {/* {active && (
//                 <div className="dropdown">
//                   <ul>
//                     <li><a href="#">More 1</a></li>
//                     <li><a href="#">More 2</a></li>
//                     <li><a href="#">More 3</a></li>
//                     <li><a href="#">More 4</a></li>
//                     <li><a href="#">More 5</a></li>
//                   </ul>
//                 </div>
//               )} */}
//             </a>
//           </li>
//         </ul>
//         <li>
//           <Button style={{ backgroundColor: "#a31e22" }}>Sign Up | Sign In</Button>
//         </li>
//       </nav>
//       {active && header === "SERVICES" &&(
//         <div className="dropdown" style={{marginTop: "5rem"}}>
//           <ul>
//             <li><a href="#">Service 1</a></li>
//             <li><a href="#">Service 2</a></li>
//             <li><a href="#">Service 3</a></li>
//             <li><a href="#">Service 4</a></li>
//             <li><a href="#">Service 5</a></li>
//           </ul>
//         </div>
//       )}
//     </>
//   );
// }


"use client";
import Link from "next/link";
import "./header.css";
import { useState } from "react";
import { Button } from "reactstrap";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMouseEnter = (menuItem) => {
    setActiveMenu(menuItem);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

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
                      <a href="#">
                        <i className="fa fa-phone"></i>+91-904-002-3003 (IN) <i className="fa fa-phone" style={{ marginLeft: "8px" }}></i>+91-923-730-4004 (IN) <i className="fa fa-phone" style={{ marginLeft: "8px" }}></i>+1
                        (646)916-3476 (USA)
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
                      <Link href={"https://www.facebook.com/Manuscriptedit"} target="_blank">
                        <i className="fa fa-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <a href="https://x.com/i/flow/login?redirect_after_login=%2Fmanuscriptedit" target="_blank">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/manuscriptedit/" target="_blank">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/@manuscriptedit." target="_blank">
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
      <nav className="navbar">
        <h1 className="navbar-logo">
          <Link href={"/"} className="logo">
            <img style={{ width: "150px" }} className="down" src="/images/1.png" alt=""></img>{" "}
            <img style={{ width: "150px" }} className="main_sticky" src="/images/1.png" alt=""></img>
          </Link>
        </h1>
        <ul className="nav-menu">
          <NavItem
            label="SERVICES"
            dropdownItems={[
              { label: "Service 1", link: "/service-1" },
              { label: "Service 2", link: "/service-2" },
              { label: "Service 3", link: "/service-3" },
              { label: "Service 4", link: "/service-4" },
              { label: "Service 5", link: "/service-5" },
            ]}
            onMouseEnter={() => handleMouseEnter("SERVICES")}
            onMouseLeave={handleMouseLeave}
            active={activeMenu === "SERVICES"}
          />
          <NavItem
            label="QUALITY"
            dropdownItems={[
              { label: "Quality 1", link: "/quality-1" },
              { label: "Quality 2", link: "/quality-2" },
              { label: "Quality 3", link: "/quality-3" },
              { label: "Quality 4", link: "/quality-4" },
              { label: "Quality 5", link: "/quality-5" },
            ]}
            onMouseEnter={() => handleMouseEnter("QUALITY")}
            onMouseLeave={handleMouseLeave}
            active={activeMenu === "QUALITY"}
          />
          <NavItem
            label="SUBMIT MANUSCRIPT"
            dropdownItems={[
              { label: "Submit Manuscript 1", link: "/submit-manuscript-1" },
              { label: "Submit Manuscript 2", link: "/submit-manuscript-2" },
              { label: "Submit Manuscript 3", link: "/submit-manuscript-3" },
              { label: "Submit Manuscript 4", link: "/submit-manuscript-4" },
              { label: "Submit Manuscript 5", link: "/submit-manuscript-5" },
            ]}
            onMouseEnter={() => handleMouseEnter("SUBMIT")}
            onMouseLeave={handleMouseLeave}
            active={activeMenu === "SUBMIT"}
          />
          <NavItem
            label="EDITOR"
            dropdownItems={[
              { label: "Editor 1", link: "/editor-1" },
              { label: "Editor 2", link: "/editor-2" },
              { label: "Editor 3", link: "/editor-3" },
              { label: "Editor 4", link: "/editor-4" },
              { label: "Editor 5", link: "/editor-5" },
            ]}
            onMouseEnter={() => handleMouseEnter("EDITOR")}
            onMouseLeave={handleMouseLeave}
            active={activeMenu === "EDITOR"}
          />
          <NavItem
            label="MORE"
            dropdownItems={[
              { label: "More 1", link: "/more-1" },
              { label: "More 2", link: "/more-2" },
              { label: "More 3", link: "/more-3" },
              { label: "More 4", link: "/more-4" },
              { label: "More 5", link: "/more-5" },
            ]}
            onMouseEnter={() => handleMouseEnter("MORE")}
            onMouseLeave={handleMouseLeave}
            active={activeMenu === "MORE"}
          />
        </ul>
        <div className="signup-signin">
          <Button style={{ backgroundColor: "#a31e22" }}>Sign Up | Sign In</Button>
        </div>
      </nav>
    </>
  );
}

function NavItem({ label, dropdownItems, onMouseEnter, onMouseLeave, active }) {
  return (
    <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <a href={"#"} className={`nav-links ${active ? "active" : ""}`}>
        {label}
        {active && (
          <div className="dropdown">
            <ul>
              {dropdownItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.link}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </a>
    </li>
  );
}
