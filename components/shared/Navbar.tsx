"use client";

import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useSession } from "next-auth/react";

const Navbar = () => {
  let user = useCurrentUser();
  let { data: session } = useSession();
  const role: any = session?.user || {};

  console.log("user", user, "data=>", session);

  return (
    <div className="h-20 border-b border-b-gray-200 w-full flex items-center justify-between px-4 md:px-10">
      <div>
        <Link href={"/"}>
          <Image src={"/ahmed.png"} height={50} width={200} alt="ahmed" />
        </Link>
      </div>
      {user ? (
        <div className="flex items-center justify-center gap-3">
          {role.role === "ADMIN" && (
            <Link href={"/admin/dashboard"}>
              <Button variant={"outline"} className="text-green-600">
                Dashboard
              </Button>
            </Link>
          )}
          <Link href={"/profile"}>
            <Button>Profile</Button>
          </Link>
          <Link href={"/create"}>
            <Button>Create Note</Button>
          </Link>
        </div>
      ) : (
        <div className="flex items-center justify-center gap-3">
          <Link href={"/login"}>
            <Button>login</Button>
          </Link>
          <Link href={"/sign-up"}>
            <Button>sign up</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
