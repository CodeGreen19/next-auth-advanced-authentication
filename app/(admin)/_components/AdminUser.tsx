import { Button } from "@/components/ui/button";
import React from "react";

const AdminUser = () => {
  return (
    <ul className="grid grid-cols-[1.5fr_2fr_0.7fr_1.2fr_0.8fr_0.4fr] gap-2 mb-2 group">
      <li className="admin-user-list">name: name</li>
      <li className="admin-user-list">email: email@gmail.com</li>
      <li className="admin-user-list">role: User</li>
      <li className="admin-user-list">joined at: 12 may 2024</li>
      <li className="admin-user-list">notes count: 50</li>
      <li className="admin-user-list">
        <Button variant={"outline"} className="text-red-500 hover:text-red-600">
          Delete
        </Button>
      </li>
    </ul>
  );
};

export default AdminUser;
