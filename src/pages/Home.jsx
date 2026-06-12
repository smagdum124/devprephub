import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import FeaturedQuestions from "../components/home/FeaturedQuestions";
import { Helmet } from "react-helmet-async";
import FeaturedRoadmaps from "../components/home/FeaturedRoadmaps";
import WhyDevPrepHub from "../components/home/WhyDevPrepHub";
import CallToAction from "../components/home/CallToAction";

const Home = () => {

  return (
    <>
      <Helmet>
        <title>DevPrepHub | Crack Developer Interviews</title>

        <meta
          name="description"
          content="Practice React, JavaScript, Node.js interview questions and get hired faster."
        />
      </Helmet>
      <Hero />
      <Categories />
      <FeaturedQuestions />
      <FeaturedRoadmaps />
      <WhyDevPrepHub />
      <CallToAction/>
    </>
  );
};

export default Home;