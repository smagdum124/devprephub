import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import FeaturedQuestions from "../components/home/FeaturedQuestions";
import { Helmet } from "react-helmet-async";

const Home = () => {
  <Helmet>
    <title>DevPrepHub | Crack Developer Interviews</title>

    <meta
      name="description"
      content="Practice React, JavaScript, Node.js interview questions and get hired faster."
    />
  </Helmet>
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedQuestions />
    </>
  );
};

export default Home;