"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { Fragment } from "react";
import Notes from "./_components/Notes";
import { useSession } from "next-auth/react";

const HomePage = () => {
  let auth = false;
  let { data } = useSession();
  console.log("home=>", data);

  return (
    <Fragment>
      {data ? (
        <Notes />
      ) : (
        <div className="min-h-96 w-full flex items-center justify-center flex-col space-y-6">
          <h1>just write down to be organized</h1>
          <Link href={"/create"}>
            <Button>Create note </Button>
          </Link>
          <Link href={"/about"}>about page</Link>
        </div>
      )}
    </Fragment>
  );
};

export default HomePage;
