import SEO from "../components/SEO";
import Breadcrumb from "../components/Breadcrumb";

const Disclaimer = () => {
  return (
    <>
      <SEO
        title="Disclaimer | DevPrepHub"
        description="Read the disclaimer for DevPrepHub regarding educational content, interview preparation materials, and external links."
        keywords="Disclaimer, DevPrepHub Disclaimer, Interview Preparation Disclaimer, Developer Resources"
      />

      <div className="min-h-screen px-6 py-20">
        <div className="mx-auto max-w-4xl">
 <Breadcrumb />
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white">
            Disclaimer
          </h1>

          <p className="mt-6 leading-8 text-slate-600 dark:text-slate-400">
            The information provided on <strong>DevPrepHub</strong> is
            published in good faith and is intended for educational and
            informational purposes only. While we strive to keep our
            content accurate and up to date, we make no warranties about
            the completeness, reliability, or accuracy of the information
            available on this website.
          </p>

          <div className="mt-10 space-y-8">

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                Educational Purpose
              </h2>

              <p className="mt-3 leading-8 text-slate-600 dark:text-slate-400">
                All interview questions, answers, blogs, resume tips,
                roadmaps, and other learning materials available on
                DevPrepHub are provided solely for educational and
                interview preparation purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                No Job Guarantee
              </h2>

              <p className="mt-3 leading-8 text-slate-600 dark:text-slate-400">
                Using DevPrepHub does not guarantee employment,
                interview selection, or job offers. Success depends on
                your preparation, technical knowledge, communication
                skills, and recruitment process.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                External Links
              </h2>

              <p className="mt-3 leading-8 text-slate-600 dark:text-slate-400">
                Our website may contain links to third-party websites for
                additional learning resources. We do not control or
                endorse the content, services, or privacy practices of
                those external websites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                Professional Advice
              </h2>

              <p className="mt-3 leading-8 text-slate-600 dark:text-slate-400">
                The content on DevPrepHub should not be considered legal,
                financial, career, or professional advice. Users should
                make independent decisions based on their own research
                and circumstances.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                Limitation of Liability
              </h2>

              <p className="mt-3 leading-8 text-slate-600 dark:text-slate-400">
                DevPrepHub and its creators shall not be held liable for
                any direct, indirect, incidental, or consequential loss
                or damage arising from the use of this website or its
                content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                Consent
              </h2>

              <p className="mt-3 leading-8 text-slate-600 dark:text-slate-400">
                By using DevPrepHub, you acknowledge that you have read,
                understood, and agreed to this Disclaimer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                Updates
              </h2>

              <p className="mt-3 leading-8 text-slate-600 dark:text-slate-400">
                We reserve the right to update, modify, or change this
                Disclaimer at any time without prior notice. Any changes
                will be reflected on this page.
              </p>
            </section>

          </div>

          <p className="mt-12 border-t border-slate-200 pt-6 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-500">
            Last Updated: June 2026
          </p>

        </div>
      </div>
    </>
  );
};

export default Disclaimer;