import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useWindowSize } from 'react-use';
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';
import logo from '../assets/LogoACQ.svg';

const Navbar: React.FC = () => {
  const [openLinks, setOpenLinks] = useState(false);
  const { width } = useWindowSize();

  const toggleNav = () => {
    setOpenLinks(!openLinks);
  };

  const closeNav = () => {
    setOpenLinks(false);
  };

  useEffect(() => {
    if (openLinks && width < 768) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [openLinks, width]);

  return (
    <div className='navbar flex'>
      {/* Simplified, removed unnecessary background and drapes */}
      {/* <div className='bg absolute flex gap-[150px] md:gap-[150px]'> */}
        {/* <div className='stripe'></div> */}
      {/* </div> */}

      {/* Logo */}
      <div className='left left-1 text-3xl top-5 absolute'>
        <img src={logo} className='w-[8vw] h-[8vh] ml-0 mt-[-2vh] md:ml-[-20%] md:mt-[-14%]' alt='Logo' />
      </div>

      {/* Navigation Links */}
      <div className='Front flex absolute bottom-5 right-5'>
        <div className='right mr-2 mb-[-2%]'>
          <Link to="/" onClick={closeNav}> Home </Link>
          <Link to="/countdown" onClick={closeNav}> Countdown </Link>
        </div>
        {/* <button onClick={toggleNav} id="burger" className='burger mb-2 mr-1'>
          <ReorderIcon />
        </button> */}
      </div>
    </div>
  );
}

export default Navbar;
