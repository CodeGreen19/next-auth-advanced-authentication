import Navbar from "@/components/shared/Navbar";
import React from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">{children}</div>
    </div>
  );
};

export default AdminLayout;
