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
    <div>
      <header>
        <Image src="/images/logo.png" alt="logo" width={50} height={50} />
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
          <Link href="/">Features</Link>
          <Link href="/">About</Link>
          <Link href="/">FAQ</Link>
          <div style={{minHeight: '20px'}}></div>
          <Button1 />
      </div>


      {/*{device && (
        <header>
          <Image src="/images/logo.png" alt="logo" width={50} height={50} />
          <nav>
            <Link href="/">Features</Link>
            <Link href="/">About</Link>
            <Link href="/">FAQ</Link>
          </nav>
          <div>
            <Button1 />
          </div>
        </header>
      )}

      {device && (
        <header>
          <div>
            <Image src="/images/logo.png" alt="logo" width={50} height={50} />
          </div>
          <div>
            <div
              className={`${style.navIcon3} ${navOpen ? style.open : ""}`}
              onClick={toggleNav}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </header>
      )}*/}
    </div>
  );
};

export default Header;
