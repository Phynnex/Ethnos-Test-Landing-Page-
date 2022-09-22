
import classes from './Navbar.module.css';
import Link from 'next/link';
import Image from 'next/image'



function Navbar() {

  return (
    <header className={classes.header}>
      <Image 
        src='/logo.png'
        alt='logo'
        width={195}
        height={62}
      />
      <nav>
        <ul>
          <li >
            <Link href='/' passHref>Home</Link>
          </li>
          <li>
            <Link href='/about' passHref>About Us</Link>
          </li>
          <li>
            <Link href='/services' passHref>Services</Link>
          </li>
          <li>
            <Link href='/contact' passHref>Contact</Link>
          </li>
          <li>
            <Link href='/blog' passHref>Blog</Link>
          </li>
          <li>
            <button className={classes.navButton}>Consultation</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;