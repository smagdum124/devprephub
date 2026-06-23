import { useEffect, useState } from "react";
import {
  Users,
  FileText,
  BookOpen,
  Award,
} from "lucide-react";

import api from "../../services/api";

const AdminDashboard = () => {
  const [stats, setStats] =
    useState({
      totalUsers: 0,
      totalQuestions: 0,
      totalBlogs: 0,
      totalResumeTips: 0,
    });

  useEffect(() => {
    const fetchStats =
      async () => {
        try {
          const { data } =
            await api.get(
              "/dashboard/stats"
            );


          setStats(
            data.stats
          );
        } catch (error) {
          console.log(error);
        }
      };

    fetchStats();


  }, []);

  const cards = [
    {
      title: "Users",
      value:
        stats.totalUsers,
      icon: Users,
    },
    {
      title: "Questions",
      value:
        stats.totalQuestions,
      icon: FileText,
    },
    {
      title: "Blogs",
      value:
        stats.totalBlogs,
      icon: BookOpen,
    },
    {
      title: "Resume Tips",
      value:
        stats.totalResumeTips,
      icon: Award,
    },
  ];

  return (<div className="p-6">


    <h1 className="mb-8 text-4xl font-bold">
      Dashboard
    </h1>

    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

      {cards.map(
        (
          card,
          index
        ) => {
          const Icon =
            card.icon;

          return (
            <div
              key={index}
              className="
              rounded-2xl
              border
              bg-white
              p-6
              shadow-sm
              dark:border-slate-800
              dark:bg-slate-900
            "
            >
              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm text-slate-500">
                    {
                      card.title
                    }
                  </p>

                  <h2 className="mt-2 text-4xl font-bold">
                    {
                      card.value
                    }
                  </h2>

                </div>

                <div className="rounded-xl bg-blue-100 p-4 dark:bg-blue-900/30">

                  <Icon
                    size={
                      28
                    }
                  />

                </div>

              </div>

            </div>
          );
        }
      )}

    </div>

    <div className="mt-8 grid gap-6 lg:grid-cols-2">

      <div className="rounded-2xl border p-8 dark:border-slate-800">
        <h2 className="mb-4 text-xl font-semibold">
          Content Overview
        </h2>

        <div className="space-y-4">

          <div>
            Questions:
            {
              stats.totalQuestions
            }
          </div>

          <div>
            Blogs:
            {
              stats.totalBlogs
            }
          </div>

          <div>
            Resume Tips:
            {
              stats.totalResumeTips
            }
          </div>

        </div>

      </div>

      <div className="rounded-2xl border p-8 dark:border-slate-800">

        <h2 className="mb-4 text-xl font-semibold">
          System Status
        </h2>

        <p>
          Admin Panel Active
        </p>

        <p className="mt-2">
          Database Connected
        </p>

      </div>

    </div>

  </div>


  );
};

export default AdminDashboard;
