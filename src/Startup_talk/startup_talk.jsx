import React from "react";

const StartupTalk = () => {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        
        {/* Blog Image */}
       

        {/* Title */}
        <h2 style={styles.title}>
          I've Talked to several Founders: Here's What They Told Me
        </h2>

        <img
          src="../../public/startup_talk.png"
          alt="Startup mindset"
          style={styles.image}
        />

        {/* Blog Content */}
        <p style={styles.text}>
         
“From Rich Dad Poor Dad, I read that the acronym of JOB is Just Over Job, now whether you agree on it or not depends on you but a stable high paying job is luring to almost most of students. I have seen students trying to be settled on a stable job and that’s disappointing because they don’t eager to work on their own ideas. If the amount of dedication and effort that students put into a start-up idea, then may be most of them would run a million dollar venture. Let me explain how, First I recommend this article(www.wanloft.com) to read by users because as it explains why will a person buy a product or service from you. So if a product solves a real need of user or make his pain point clear or make his/her experience better then surely a user will buy a product from you. Just imagine how much potential it has because we have internet at our fingertip, if we create a product whether a app or a webapp that instantly will be available to millions or a billion of people, ofcourse it is not always true that everyone will be your users but even if for lowest a million people becomes your users then showing ads to million people will make you a multi-millionaire less than just a year.”


        </p>

       

        <p style={styles.text}>
        "Trust me the competition for becoming founder is very low, hiring is so much easier task because a lot are wanting to spend their life years into other’s idea. I am not saying start-ups are easy but it’s highly rewarding, founders don’t feel like working when they are building their own product from scartch. From 0 to 1 and then ready to scale, this journey is really adventuring to me. Customers are everything, we have to give real value to customers because that’s why they will be voting our start up with their money."
        </p>

        <p style={styles.text}>
        "Start-up is a business with uncertainty, may be you will open up a new market or create a innovative product but it is not always that way, many times the product’s ideas are not new but better. You must have hear people complain like ‘I wish it happens like this, ‘I hate this job to do’, ‘I face that problem often’. These compains are real opportunity of start-ups. But this makes feel broken seeing students getting behind job, choosing comfort over chaos, I really wish a student doesn’t only focus on internal value but rather creating values in external forms whether that be a product or the company. Yes, building something greater than you."
        </p>

        {/* <p style={styles.text}>
          Start small. Learn skills. Build something useful. Even failure
          teaches lessons that no classroom ever will.
        </p> */}

      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
    display: "flex",
    justifyContent: "center",
    padding: "12px",
    fontFamily: "Arial, sans-serif",
  },
  container: {
    maxWidth: "800px",
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "8px",
  },
  image: {
    width: "100%",
    borderRadius: "6px",
    marginBottom: "16px",
  },
  title: {
    marginBottom: "16px",
    textAlign: "left",
  },
  text: {
    fontSize: "16px",
    lineHeight: "1.7",
    marginBottom: "14px",
    textAlign: "left",
  },
};

export default StartupTalk;