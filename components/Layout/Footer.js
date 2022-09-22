import Image from "next/image";
import Link from "next/link";
import classes from "./Footer.module.css";
import Mail from "../../public/mail.png"
import Phone from "../../public/Phone.png"


const contact = [
  // {
  //   id: "1",
  //   icon: Mail,
  //   text:"78 Dykehead Street, Queenslie Industrial Estate, Glasgow, Scotland, G33 4AQ"
  // },

  {
    id: "1",
    icon: Mail,
    text:"hello@gpglobalconsult.co.uk"
  },
  {
    id: "2",
    icon: Phone,
    text:"+44740-0837-537"
  },
]

const Footer = () => {
  return (
    <>
      <section className={classes.FooterSection}>
        <div  className={classes.footerContainer}>
        <div>
        <p className={classes.footerTitle}>About Us</p>
        <p className={classes.footerText}>
          GP Global Consultancy Limited is a industry leader in providing data
          science as a service, BI solutions, and data analytics consulting, and
          trainings. We help large, and small and medium enterprises...
        </p>
      </div>
      <div>
        <p className={classes.footerTitle}>Quick Links</p>
        <ul >
          <li className={classes.footerList}>
            <Link href="/" passHref>
              Home
            </Link>
          </li>
          <li className={classes.footerList}>
            <Link href="/" passHref>
              About Us
            </Link>
          </li>
          <li className={classes.footerList}>
            <Link href="/" passHref>
              Services
            </Link>
          </li>
          <li className={classes.footerList}>
            <Link href="/" passHref>
              Contact
            </Link>
          </li>
          <li className={classes.footerList}>
            <Link href="/" passHref>
              Blog
            </Link>
          </li>
        </ul>
      </div>
      <div style={{marginTop:'60px'}}>
        <p className={classes.footerTitle}>Contact Info</p>
        <div style={{ display: "flex", }}>
            <div className={classes.address}>
              <Image src='/mail.png' alt="address" width={24} height={24} />
            </div>
            <p>
            78 Dykehead Street, Queenslie Industrial Estate, Glasgow, Scotland, G33 4AQ
            </p>
          </div>
        {contact.map((contact) => (
          <div key={contact}>
          <div style={{ display: "flex", }}>
            <div className={classes.contact}>
              <Image src={contact.icon} alt="address" width={24} height={24} />
            </div>
            <p>
              {contact.text}
            </p>
          </div>
        </div>
        ))}
        
        <div className={classes.socials}>
          <Image src="/facebook.png" alt="address" width={20} height={20} />
          <Image src="/twitter.png" alt="twitter" width={20} height={20} />
          <Image src="/linkedIn.png" alt="linkedIn" width={20} height={20} />
          <Image src="/instagram.png" alt="instagram" width={20} height={20} />
        </div>
      </div>
      <div className={classes.newsLetter}>
        <p className={classes.footerTitle}>Newsletter</p>
        <p>Subscribe to our mailing list to get our latest blog articles</p>
        <div className={classes.inputDiv}>
        <input type="email" id="email" name="email" className={classes.footerInput}/>
          <button className={classes.footerBtn}>Subscribe</button>
        </div>
      </div>
        </div>
      
      <div className={classes.copyright}>
      <div className={classes.footerLine}></div>
      <div className={classes.copyrightText}>
        <p>Copyright © 2022. All Rights Reserved.</p>
      </div>
      </div>
    </section>
    </>
    
  );
};

export default Footer;
