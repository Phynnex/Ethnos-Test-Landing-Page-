import Image from "next/image";
import classes from "../Services/Services.module.css";
import Image1 from "../../public/dataAnalysis.png";
import Image2 from "../../public/predictiveAnalysis.png";
import Image3 from "../../public/training.png";

const services = [
  {
    id: "1",
    image: Image1,
    title: "Data Analysis",
    text: "GP consultancy helps you to gain nsight for any form of data - structured or unstructured. Our experts work on complex datasets to map in a logical format to understand data.",
  },
  {
    id: "2",
    image: Image2,
    title: "Predictive Analysis",
    text: "With the use of advanced statistical models and  data mining GPGlobal Consultancy Limited offers an independent research services in a wide variety of research categories",
  },
  {
    id: "3",
    image: Image3,
    title: "Data Analysis Training",
    text: "GP consultancy offers robust and hands-on training to individuals and corporates. Whether you want to sharpen your data skills or switch to an IT role, we got you covered.",
  },
];

const index = () => {
  return (
    <div className={classes.servicesContainer}>
      <p className={classes.servicesTitle}>What We Offer</p>
      <div className={classes.serviceCardContainer}>
        {services.map((info) => (
            <div key={info} >
<div className={classes.servicesCard} >
    <div style={{height:"50px"}}>
    <Image src={info.image} alt="services" width={57} height={57} />

    </div>
            <p className={classes.cardTitle}>{info.title}</p>
            <p className={classes.cardText}>{info.text}</p>

            <div className={classes.cardFooter}>
              <p className={classes.footerText}>Learn More</p>
              <p className={classes.arrowRight}></p>
            </div>
          </div>
            </div>
          
        ))}
      </div>
      <div className={classes.btnDiv}>
        <button className={classes.contactBtn}>Contact Us</button>
      </div>
    </div>
  );
};

export default index;
