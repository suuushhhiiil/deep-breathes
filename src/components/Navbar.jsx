import logo from '../assets/logo.png'
import { Link, useLocation } from 'react-router-dom';
import "../styles/Navbar.css";
import { useState } from 'react';
import { div } from 'framer-motion/client';


const Navbar = () => {

  const location = useLocation();
  const [menuExpand, setMenuExpand] = useState(false);
  const [visitPage, setVisitPage] = useState(false);
  const Links = [
    { name: "Home", link: "/" },
    { name: "Utter Your Thoughts", link: "/utter-your-thoughts" },
    { name: "Mind-Tracker", link: "/mind-tracker" },
    { name: "Explore", link: "/explore" },
    { name: "About", link: "/about" },
  ];

  const handleMenu = () => {
    setMenuExpand(!menuExpand);
  }
  const handleOpen = () => {
    setMenuExpand(!menuExpand);
    setVisitPage(!visitPage);
  }

  return (
    <nav className="sticky top-0 py-[10px] z-50 backdrop-blur-[80px] font-sans">
      <div className="z-50 hidden top-0 lg:flex items-center justify-between px-[100px] py-2 relative">
        { //Logo
          <Link to={'/'} className=''><div className={`flex items-center space-x-5`}>
            <div id="logo-div" className="rounded-full p-3 bg-primary">
              <img
                src={logo}
                alt=""
                className="h-[3.5vw]"
              />
            </div>
            <span className={`font-display text-3xl leading-[1] font-extrabold`}>Deep<br />Breathes</span>
          </div>
          </Link>
        }
        { //Desktop-Nav-Items
          <div className='lg:flex hidden items-center'>
            <ul className='lg:flex items-center hidden space-x-2'>
              {
                Links.map((items) => {
                  return (
                    <li key={items.name} className=''><Link to={items.link} className={`text-[20px] lg:text-2xl font-sans px-[10px] rounded-full font-light ${location.pathname === items.link ? 'active-link' : 'inactive-link'}`}>{items.name}</Link></li>
                  )
                })
              }
            </ul>
          </div>
        }
        <Link to={'/contact'} className='animate-button text-2xl rounded-full border-secondary text-secondary border-[1px] px-[2rem] py-[1vh] hover:border-primary hover:text-black'>Contact Us</Link>
      </div>
      { //Mobile-Nav-Bar
        <div className='lg:hidden flex justify-between items-center px-[20px]'>
          <Link to={'/'} className=''>
            <div className={`flex items-center space-x-9`}>
              <div id="logo-div" className="rounded-full p-8 bg-primary shadow-lg">
                <img
                  src={logo}
                  alt=""
                  className="h-[45px]"
                />
              </div>
              <span>
                <h1 className={`font-display text-8xl leading-[1] font-extrabold`}>
                  Deep<br />Breathes
                </h1>
              </span>
            </div>
          </Link>
          <div className={`menuButton h-[50px] text-5xl w-[50px] bg-primary rounded-[20px] flex flex-col items-center justify-center space-y-3 shadow-lg ${menuExpand ? `active` : `inactive`}`} onClick={handleMenu}>
            <div className={`bar1 bg-black h-[3px] w-[45%] rounded-full ${menuExpand ? `active` : `inactive`}`}></div>
            <div className={`bar2 bg-black h-[3px] w-[45%] rounded-full ${menuExpand ? `active` : `inactive`}`}></div>
            <div className={`bar3 bg-black h-[3px] w-[45%] rounded-full ${menuExpand ? `active` : `inactive`}`}></div>
          </div>
        </div>
      }
      {
        //Menu-Items
        <div className={`menuItems absolute lg:hidden bg-accent bg-opacity-5 text-8xl mt-[20px] right-[20px] ${menuExpand ? `translate-y-[0]` : `opacity-0 translate-x-[-100%]`} rounded-[13px] p-[20px] text-right shadow-lg`}>
          <ul className='space-y-9'>
            {
              Links.map((item, index) => {
                return (
                  <li key={item.name} className={`py-[8px] px-[12px] rounded-full`} onClick={handleOpen}>
                    <Link to={item.link} className={`text-[20px] font-sans px-[12px] rounded-full font-light ${location.pathname === item.link ? 'active-link' : 'inactive-link'}`}>{item.name}</Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
      }
    </nav>
  )
}

export default Navbar