import ComingSoon from "./ComingSoon";
import { Helmet } from "react-helmet-async";

const Blogs = () => {
  return (
    <>
      <Helmet>
        <title>Developer Blogs | DevPrepHub</title>

        <meta
          name="description"
          content="Read developer blogs, interview tips, React tutorials and career guidance."
        />

        <meta
          name="keywords"
          content="Developer Blogs, React Blog, JavaScript Blog, Career Tips, Interview Tips"
        />
      </Helmet>

      <ComingSoon title="Blogs Coming Soon" />
    </>
  );
};

export default Blogs;