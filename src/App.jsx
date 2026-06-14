import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";

import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Roadmaps from "./pages/Roadmaps";
import ResumeTips from "./pages/ResumeTips";
import InterviewQuestions from "./pages/InterviewQuestions";
import Contact from "./pages/Contact";
import Footer from "./components/layout/Footer";
import QuestionDetails from "./pages/QuestionDetails";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./pages/NotFound";
import RoadmapDetails from "./pages/RoadmapDetails";

function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 dark:bg-slate-950 dark:text-white transition-colors duration-300">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/roadmaps" element={<Roadmaps />} />
        <Route path="/resume-tips" element={<ResumeTips />} />
        <Route path="/questions" element={<InterviewQuestions />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/questions/:slug"
          element={<QuestionDetails />}
        />
        <Route path="/about" element={<About />} />

        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
        />

        <Route
          path="/terms-and-conditions"
          element={<TermsAndConditions />}
        />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/roadmaps/:slug"
          element={<RoadmapDetails />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;