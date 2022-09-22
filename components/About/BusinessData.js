import classes from "./About.module.css";
import Image from "next/image";
import DataAnalytics from "../../public/dataAnalytics.png"


const businessData = () => {
    return (
        <section className={classes.businessContainer}>
            <div className={classes.dataAnalyticswrapper}>
                <div className={classes.dataAnalyticsCard}></div>
                <div className={classes.dataAnalyticsCard2}></div>
                
            </div>
            <div className={classes.textContainer}>
                <p className={classes.subtitle}>Perfect Solution</p>
                <p className={classes.title}>Transform business Data</p>
                <p className={classes.subtitle}>Make informed decisions for business growth</p>
                <p className={classes.text}>Data is a critical asset for any organization. It is important to harness data to drive business insights, automation and process improvement. GPGlobal Consultancy Limited is an industry leader in providing data analysis as a service, BI solutions, and data analytics consulting, and trainings. We help large, and small and medium enterprises to make better, informed business decisions  that greatly improve brands and increase revenue via big data analytics and visualization.
                </p>
                <button className={classes.learnMoreBtn}>Learn More</button>
            </div>
        </section>
    )
}



export default businessData;