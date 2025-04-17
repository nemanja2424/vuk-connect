"use client";
import { useEffect, useState } from "react";
import style from "./Header.module.css"
import Link from "next/link";
import Image from "next/image";
import Button1 from "./Button1";

const Header = () => {
  const [device, setDevice] = useState<boolean>(true);
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const [telNavAnim, setTelNavAnim] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setDevice(window.innerWidth >= 760);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleNav = () => {
    setNavOpen(prevState => !prevState);
    setTimeout(() => setTelNavAnim(prevState => !prevState), 10);

  };

  return (
    <div style={{ position:'fixed', top:'0', left:'0', zIndex:'1000', width:'100%' }}>
      <header>
        <Image src="/images/logo.webP" alt="logo" width={50} height={50} />
        <nav>
            <Link href="/">Features</Link>
            <Link href="/">About</Link>
            <Link href="/">FAQ</Link>
          </nav>
          <div  className="forPC" >
            <Button1 />
          </div>
          <div
              className={`${style.navIcon3} forPh ${navOpen ? style.open : ""}`}
              onClick={toggleNav}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
      </header>

      <div className={`phoneNav ${telNavAnim ? "open" : ""}`}>
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center',  }}>
          <Link href="/">Features</Link>
          <Link href="/">About</Link>
          <Link href="/">FAQ</Link>
          <div style={{minHeight: '20px'}}></div>
          <Button1 />
        </div>
      </div>
    </div>
  );
};

export default Header;
