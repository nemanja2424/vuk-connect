import Link from 'next/link';
import Image from 'next/image';
import Button1 from './Button1';

const Header = () => {
  return (
    <header>
        <div>
            <Image src={"/images/logo.png"} alt='logo' width={60} height={60} />
        </div>
        <nav>
            <Link href="/">Features</Link>
            <Link href="/">About</Link>
            <Link href="/">FAQ</Link>
        </nav>
        <div>
            <Button1 />
        </div>
    </header>
  );
};

export default Header;
