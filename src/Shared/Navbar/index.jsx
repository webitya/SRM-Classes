import {
    FacebookOutlined,
    InstagramOutlined,
    LinkedinOutlined,
    MenuOutlined,
    PhoneOutlined,
    XOutlined,
    YoutubeOutlined,
    MailOutlined,
    DotChartOutlined,
    YoutubeFilled,
  } from "@ant-design/icons";
  import { Button, Drawer } from "antd";
  import { useState, useEffect } from "react";
  import { Link } from "react-router-dom";
  import "./Navbar.css";
  
  const NavbarEl = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [NavBar, setNavBar] = useState("relative");
  
    const sticky = () => {
      let scrollTop = window.scrollY;
      if (scrollTop > 200) {
        setNavBar("fixed");
      } else {
        setNavBar("relative");
      }
    };
    
    window.addEventListener('scroll', sticky);
  
    const display = (
      <>
        <div className="flex justify-between items-center px-3 py-3 bg-white shadow-lg navBarTop w-100" style={{ position: NavBar }}>
          <div>
            <Link to="/">
              {/* <img src="/logo111.svg" width="100px" alt="SRM CLASSES Logo" /> */}
              <h2 className="text-2xl font-bold">SRM CLASSES</h2>
            </Link>
          </div>
          <div className="desktopMenu">
            <ul className="flex gap-4 items-center justify-center text-zinc-700">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/facilities">Facilities</Link></li>
              <li><Link to="/toppers">Toppers</Link></li>
              <li><Link to="/notes">Notes</Link></li>
              <li className="live-lectures">
          <Link to="/live-lectures" className="flex gap-1 items-center">
            Live Lectures
            <span className="live-dot">
              <YoutubeFilled className="text-red-500" />
            </span>
          </Link>
        </li>
              <li><Link to="/contact-us">Contact Us</Link></li>
              <li>
                <Link to="/enroll-now">
                  <Button
                    className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    style={{
                      padding: "15px 20px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    ENROLL NOW
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="HamburgerDiv">
            <MenuOutlined className="hamburgerIcon" onClick={() => setOpenMenu(true)} />
          </div>
          <Drawer open={openMenu} onClose={() => setOpenMenu(false)} closable>
            <div>
              {/* <img src="/logo111.svg" width="130px" alt="SRM CLASSES Logo" /> */}
              <h2 className="text-2xl font-bold">SRM CLASSES</h2>
            </div>
            <div className="drawerNav">
              <ul>
                <li onClick={() => setOpenMenu(false)}><Link to="/">Home</Link></li>
                <li onClick={() => setOpenMenu(false)}><Link to="/courses">Courses</Link></li>
                <li onClick={() => setOpenMenu(false)}><Link to="/facilities">Facilities</Link></li>
                <li onClick={() => setOpenMenu(false)}><Link to="/toppers">Toppers</Link></li>
                <li><Link to="/notes">Notes</Link></li>
              <li className="live-lectures">
          <Link to="/live-lectures" className="flex gap-1 items-center">
            Live Lectures
            <span className="live-dot">
              <YoutubeFilled className="text-red-500" />
            </span>
          </Link>
        </li>
                <li onClick={() => setOpenMenu(false)}><Link to="/contact-us">Contact Us</Link></li>
                <li>
                  <Link to="/enroll-now">
                    <Button
                      className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                      style={{
                        padding: "15px 20px",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      ENROLL NOW
                    </Button>
                  </Link>
                </li>
                <li className="flex gap-2">
                  <Link to="#"><Button className="text-pink-500"><InstagramOutlined /></Button></Link>
                  <Link to="#"><Button className="text-black"><XOutlined /></Button></Link>
                  <Link to="#"><Button className="text-blue-400"><LinkedinOutlined /></Button></Link>
                  <Link to="#"><Button className="text-red-600"><YoutubeOutlined /></Button></Link>
                  <Link to="#"><Button className="text-blue-700"><FacebookOutlined /></Button></Link>
                </li>
                <li>
                  <h1>
                    <b><PhoneOutlined className="text-green-900" /> Phone: </b><span>74888-86903</span>
                  </h1>
                </li>
                <li>
                  <h1>
                    <b><MailOutlined className="text-blue-700" /> Email: </b><span>info@srmclasses.com</span>
                  </h1>
                </li>
                <li>
                  <h1>
                    <b>Address: </b><span>Ravi Steel Chowk, Kamre Ashram, Mandar</span>
                  </h1>
                </li>
              </ul>
            </div>
          </Drawer>
        </div>
      </>
    );
  
    return display;
  };
  
  export default NavbarEl;
  