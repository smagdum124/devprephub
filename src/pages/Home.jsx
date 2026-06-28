import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import FeaturedQuestions from "../components/home/FeaturedQuestions";
import SEO from "../components/SEO";
import FeaturedRoadmaps from "../components/home/FeaturedRoadmaps";
import WhyDevPrepHub from "../components/home/WhyDevPrepHub";
import CallToAction from "../components/home/CallToAction";

const Home = () => {

  return (
    <>
      <SEO
        title="DevPrepHub | Developer Interview Preparation"
        description="Practice Interview Questions, Resume Tips, Blogs and Crack Your Developer Interviews."
        keywords="React Interview Questions, JavaScript Interview Questions, Resume Tips"
      />
      <Hero />
      <Categories />
      <FeaturedQuestions />
      <FeaturedRoadmaps />
      <WhyDevPrepHub />
      <CallToAction />
    </>
  );
};

export default Home;