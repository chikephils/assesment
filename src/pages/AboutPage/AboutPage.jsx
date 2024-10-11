import React from "react";
import Hero from "../../components/Hero/Hero";
import Stats from "../../components/Stats/Stats";
import OurStory from "../../components/OurStory/OurStory";
import OurTeam from "../../components/OurTeam/OurTeam";
import OurValues from "../../components/OurValues/OurValues";
import Footer from "../../components/Footer/Footer";

const AboutPage = () => {
  return (
    <div className=" flex flex-col justify-center items-center">
      <Hero />
      <OurStory />
      <Stats />
      <OurTeam />
      <OurValues />
      <Footer />
    </div>
  );
};

export default AboutPage;
