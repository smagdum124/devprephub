
import SEO from "../components/SEO";
import Breadcrumb from "../components/Breadcrumb";


const About = () => {
    return (

        <>
            <SEO
                title="About DevPrepHub"
                description="Learn more about DevPrepHub and our mission to help developers."
                keywords="About DevPrepHub, React Interview, JavaScript Interview"
            />

            <div className="min-h-screen px-6 py-20">
                <div className="mx-auto max-w-4xl">
                <Breadcrumb />
                    <h1 className="text-5xl font-bold text-slate-900 dark:text-white">
                        About DevPrepHub
                    </h1>

                    <p className="mt-8 text-lg leading-8 text-slate-400">
                        DevPrepHub is a platform built to help developers prepare for
                        interviews, improve technical skills, and accelerate their careers.
                    </p>

                    <p className="mt-6 text-lg leading-8 text-slate-400">
                        We provide interview questions, roadmaps, career resources,
                        resume guidance, and practical learning materials for modern
                        web developers.
                    </p>

                    <p className="mt-6 text-lg leading-8 text-slate-400">
                        Our mission is simple: Learn, Practice, and Get Hired.
                    </p>
                </div>
            </div>
        </>
    );
};

export default About;