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

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;