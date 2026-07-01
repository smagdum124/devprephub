import Breadcrumb from "../components/Breadcrumb";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen px-6 py-20">
      <div className="mx-auto max-w-4xl">
         <Breadcrumb />
        <h1 className="text-5xl font-bold text-slate-900 dark:text-white">
          Terms & Conditions
        </h1>

        <p className="mt-8 text-slate-400">
          The content on DevPrepHub is provided for educational purposes only.
        </p>

        <p className="mt-4 text-slate-400">
          Users are responsible for how they use the information available
          on this platform.
        </p>

        <p className="mt-4 text-slate-400">
          DevPrepHub reserves the right to modify content at any time.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;