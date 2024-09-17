import { Button } from "@/components/ui/button";
import React from "react";
import AdminUser from "../../_components/AdminUser";

const Dashboard = () => {
  let users = ["", "", "", ""];
  return (
    <div>
      <div className="my-5 flex items-center justify-center flex-col space-y-6">
        <div className="px-5 text-lg py-4 bg-slate-100 rounded-md text-green-500">
          Dashboard
        </div>

        <section className="w-full">
          <h1 className="my-3">Total Users (59)</h1>
          <div className="w-full p-3 bg-slate-100 ring-2 ring-gray-200 rounded-md">
            <div>
              {users.map((user, i) => (
                <AdminUser key={i} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
