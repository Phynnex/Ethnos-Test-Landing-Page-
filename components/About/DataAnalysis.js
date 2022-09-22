import classes from "./About.module.css";



const DataAnalysis = () => {
    return (
        <div className={classes.dataContainer}>
            <div className={classes.textContainer}>
                <p className={classes.dataTitle}>Data analysis for effective business decision to boost profit</p>
                <p className={classes.text}>As a data analysis consulting firm with global and multi-industry experience, we help your organization discover, analyze and interpret data, enabling you to have a better understanding of the digital landscape and make informed business decisions to help you achieve your business goals and plan ahead.</p>
                <button className={classes.consultationBtn}>Request a Consultation</button>
            </div>
            <div>
                 <div className={classes.eclipse1}></div>
                <div className={classes.dataConsult}></div>
                <div className={classes.eclipse2}></div>

                
            </div>
        </div>
    )
}



export default DataAnalysis;