import classes from "./About.module.css";


const training = () => {
  return (
    <div className={classes.businessContainer}>
      <div>
        <div className={classes.trainingElipse1}></div>
        <div className={classes.dataTraining}></div>
        <div className={classes.trainingElipse2}></div>
      </div>
      <div className={classes.trainingTextContainer }>
        <p className={classes.trainingTitle}>Acquire quality data analysis skills for today’s economy</p>
        <p className={classes.text}>
          Looking to switch career to IT, or advance your career? GPGlobal
          Consultancy Limited offer unique work-ready data analysis trainibg
          programmes that is aimed at having you ready for a new career
          challenge or career advancement.
        </p>
        <button className={classes.learnMoreBtn}>Enroll Now</button>
      </div>
    </div>
  );
};

export default training;
