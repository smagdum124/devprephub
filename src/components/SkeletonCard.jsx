const SkeletonCard = () => {
  return (
    <div className="animate-pulse rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">

      <div className="h-4 w-20 rounded bg-slate-300 dark:bg-slate-700"></div>

      <div className="mt-4 h-6 w-3/4 rounded bg-slate-300 dark:bg-slate-700"></div>

      <div className="mt-4 h-4 w-full rounded bg-slate-300 dark:bg-slate-700"></div>

      <div className="mt-2 h-4 w-5/6 rounded bg-slate-300 dark:bg-slate-700"></div>

      <div className="mt-6 h-4 w-24 rounded bg-slate-300 dark:bg-slate-700"></div>

    </div>
  );
};

export default SkeletonCard;