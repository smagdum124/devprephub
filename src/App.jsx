import { Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Roadmaps from "./pages/Roadmaps";
import ResumeTips from "./pages/ResumeTips";
import InterviewQuestions from "./pages/InterviewQuestions";
import Contact from "./pages/Contact";
import QuestionDetails from "./pages/QuestionDetails";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./pages/NotFound";
import RoadmapDetails from "./pages/RoadmapDetails";
import BackToTop from "./components/BackToTop";
import BlogDetails from "./pages/BlogDetails";
import ResumeTipDetails from "./pages/ResumeTipDetails";
import Login from "./pages/Login";
// import Register from "./pages/Register";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminLayout from "./pages/admin/AdminLayout";
import AddBlog from "./pages/admin/AddBlog";
import AddQuestion from "./pages/admin/AddQuestion";
import AddResumeTip from "./pages/admin/AddResumeTip";
import MainLayout from "./layouts/MainLayout";
import Profile from "./pages/admin/Profile";
import ManageBlogs from "./pages/admin/ManageBlogs";
import ManageQuestions from "./pages/admin/ManageQuestions";
import ManageResumeTips from "./pages/admin/ManageResumeTips";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 dark:bg-slate-950 dark:text-white transition-colors duration-300">

      <ScrollToTop />
      <BackToTop />
      <Routes>

        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />

          <Route path="/blogs" element={<Blogs />} />

          <Route
            path="/blogs/:slug"
            element={<BlogDetails />}
          />

          <Route
            path="/roadmaps"
            element={<Roadmaps />}
          />

          <Route
            path="/roadmaps/:slug"
            element={<RoadmapDetails />}
          />

          <Route
            path="/resume-tips"
            element={<ResumeTips />}
          />

          <Route
            path="/resume-tips/:slug"
            element={<ResumeTipDetails />}
          />

          <Route
            path="/questions"
            element={<InterviewQuestions />}
          />

          <Route
            path="/questions/:slug"
            element={<QuestionDetails />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/privacy-policy"
            element={<PrivacyPolicy />}
          />

          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />



        </Route>

        <Route
          path="/login"
          element={<Login />}
        />

        {/* <Route
            path="/register"
            element={<Register />}
          /> */}

        {/* Admin Routes */}

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >

          <Route
            index
            element={<AdminDashboard />}
          />

          <Route
            path="add-blog"
            element={<AddBlog />}
          />

          <Route
            path="add-question"
            element={<AddQuestion />}
          />

          <Route
            path="add-resume-tip"
            element={<AddResumeTip />}
          />

          <Route
            path="profile"
            element={<Profile />}
          />

          <Route
            path="manage-blogs"
            element={<ManageBlogs />}
          />

          <Route
            path="manage-questions"
            element={<ManageQuestions />}
          />

          <Route
            path="manage-resume-tips"
            element={<ManageResumeTips />}
          />

        </Route>



        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

    </div>
  );
}

export default App;