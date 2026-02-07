import React, { useState } from "react";

const MoneyTalk = () => {
  const [darkMode, setDarkMode] = useState(false);

  const blogPosts = [
    {
      title: "1. Creator Vs Consumer",
      content:
        "Be A producer, Producers are minority& Are rich, Consumers are majority& are poor. Like Instead of Just purchasing Gadgets, Be a creator who creates Gadgets,Instead of Uploading Gaming Videos , Be a game Developer Instead of Going to school, Be someone who owns a school. The more lifes you have an impact on, The more rich you are. If you want to be a crorepati give service to 1 crore people or give 1 person 1 crore rupee product. Scale = 1 crore people , Magnitude= 1crore product."
    },
    {
      title: "2. Debt is Deadly",
      content:
        "Taking a loan for luxury products is always a bad idea. Example: A ₹5 lakh personal loan at 15% for 5 years costs ~₹8.9 lakh in total repayments. That’s ₹3.9 lakh extra burned in interest — money that could’ve doubled in investments."
    },
    {
      title: "3. Best Time",
      content:
        "If You want to be rich,The best time is when you are young. You can explore passions, Travel with family& experience life.You can create memories with own ones. Fast wealth is created Exponentially."
    },
    {
        title: "4. Process Behind Success",
        content:
          "When Flipkart Got Billion dollar valuation in 2014, Everyone called it an overnight success but Sachin& Binny Bansal were struggling hard from 2007. For 7 years They work through failures& Ling night , Booking delivery, cash-on-delivery issues solving. Behind every event There stays a process."
      },
      {
        title: "5. Build Assets",
        content:
          "Asset is what Puts money in your pocket, Liability is what takes money from your pocket. If you are spending On Unnecessary Liabilities then no income can Make you rich.Those don’t make you happy, What makes happy is good health, Freedom& strong interpersonal Relationship."
      },
      {
        title: "6. Software is New Gold",
        content:
          "Let me tell you how to be rich by becoming producer in software Business : If you create a Game Or An App like ‘Whatsapp’ then it can serve millions of people simultaneously. You create it one time but it keeping selling or downloading repeatedly without any human intervention. A physical business is often limited by geography. But if you are creating a software, it can get reach globally with just internet access. What you need to do is Learn coding& Chatgpt will always there to assist you."
      },
      {
        title: "7. Master Any Business",
        content: (
          <div>
            <p>5 Things to consider to make any business you want:</p>
      
            <ol>
              <li>
                <b>Need:</b> First it should meet a need. Businesses that solve needs win. 
                Just like it was difficult to meet a doctor by making tickets and staying on the line, 
                so NotInLine company came from our college to allow one-to-one booking with doctors from mobile. 
                Try to solve a problem for others. Listen to what people complain about or what can benefit them. 
                People vote your business with their money. The best problem you can solve is the one you faced yourself. 
                Having a passionate “why” can transform work into joy.
              </li>
      
              <li>
                <b>Entry:</b> Low entry barrier creates high competition. High competition creates low margins. 
                There should be either a technical barrier, financial barrier, or cognitive barrier 
                that prevents others from becoming your rivals. But competition is everywhere — 
                the objective should be to do it better or reach more people.
              </li>
      
              <li>
                <b>Control:</b> Business should be in your control. Own your business, 
                be a shareholder or board of director. Never be a hitchhiker to products that aren’t in your control. 
                Choose wisely with social media platforms, web hosts, or rentals.
              </li>
      
              <li>
                <b>Scale:</b> The more lives you impact, the richer you become. 
                Create a solution for 1 crore people and you can be a crorepati. 
                The best scalable online products are websites, apps, games, or informational products like YouTube videos. 
                If magnitude is high — like solving a big problem for an IPL team — you can still earn massively.
              </li>
      
              <li>
                <b>Time:</b> Try to run a business independent of your time. 
                The business should earn without your constant involvement. 
                Internet businesses satisfy this rule best.
              </li>
            </ol>
          </div>
        )
      },
        {
            title: "8. Bonus",
            content:
            "Learn skills in technology, That’ll help you to create & reach your product better to people. If you have a passive income that exceeds all your needs and lifestyle expenses including taxes, you're retired.Success takes time, Put daily efforts with patience."
          },
      ];

  const lightTheme = {
    backgroundColor: "#f8f8f8",
    cardBg: "white",
    textColor: "#333",
    subText: "#555"
  };

  const darkTheme = {
    backgroundColor: "#121212",
    cardBg: "#1E1E1E",
    textColor: "#EAEAEA",
    subText: "#BBBBBB"
  };

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: theme.backgroundColor,
        color: theme.textColor,
        minHeight: "100vh",
        padding: "10px",
        display: "flex",
        justifyContent: "center",
        transition: "0.3s"
      }}
    >
      <div
        style={{
          width: "100%",
          // maxWidth: "800px",
          backgroundColor: theme.cardBg,
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          position: "relative",

        }}
      >
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            border: "none",
            padding: "10px",
            borderRadius: "50%",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>


        <h2 style={{ textAlign: "center", color: "#007BFF" }}>
        💰 How To Be Rich: 100% Effective & Practical Guides To Earn Money
        </h2>


        <img
          src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=900&q=60"
          alt="money"
          style={{
            width: "100%",
            borderRadius: "10px",
            margin: "20px 0"
          }}
        />

        {blogPosts.map((post, index) => (
          <div
            key={index}
            style={{
              marginBottom: "25px",
              borderBottom: "1px solid #ccc",
              paddingBottom: "15px"
            }}
          >
            <h3>{post.title}</h3>
            <div
                style={{
                      fontSize: "18px",
                      lineHeight: "1.6",
                      color: theme.subText,
                      textAlign: "justify"
                     }}
                    >
                 {post.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoneyTalk;