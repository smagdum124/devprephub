import React from 'react'
import ComingSoon from './ComingSoon';
import { Helmet } from "react-helmet-async";

function Roadmaps() {

  return
  (
    <>
      <Helmet>
        <title>Developer Roadmaps | DevPrepHub</title>

        <meta
          name="description"
          content="Follow React, JavaScript, Node.js and Full Stack Developer roadmaps to become job ready."
        />

        <meta
          name="keywords"
          content="Developer Roadmap, React Roadmap, Node.js Roadmap, Full Stack Roadmap"
        />
      </Helmet>

      {/* Existing Page Code */}

      < ComingSoon title="Blogs Coming Soon" />;
    </>
  )

}

export default Roadmaps