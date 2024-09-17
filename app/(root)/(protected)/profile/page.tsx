"use client";
import { logout } from "@/actions/signout";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const ProfilePage = () => {
  const router = useRouter();
  let user = useCurrentUser();
  let { data: session } = useSession();
  const role: any = session?.user || {};
  return (
    <div className="w-full mt-7 bg-slate-50 rounded-lg">
      <ul className="flex flex-col p-3 text-gray-700 items-start justify-start space-y-4">
        <li>Name: {user?.name}</li>
        <li>Name: {user?.email}</li>
        <li>role: {role.role}</li>
        <li>
          two factore enalbled :{" "}
          {role.isTwoFactorEnabled ? "enable" : "disable"}
        </li>
        <Button
          variant={"destructive"}
          onClick={async () => {
            await logout();
            router.push("/login");
          }}
        >
          logout
        </Button>
      </ul>
    </div>
  );
};

export default ProfilePage;
