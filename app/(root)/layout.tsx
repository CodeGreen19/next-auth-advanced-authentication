import Navbar from "@/components/shared/Navbar";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="px-4 md:px-0 m-auto max-w-3xl ">{children}</div>
    </div>
  );
};

export default RootLayout;
