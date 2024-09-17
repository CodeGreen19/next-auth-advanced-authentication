"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";

type CardProps = {
  title: string;
  description: string;
  navigatelink: string;
  navigateText: string;
  toNavigate?: string;
  social?: boolean;
  children: ReactNode;
};

export default function AuthCardWrapper({
  description,
  title,
  navigatelink,
  navigateText,
  toNavigate,
  social,
  children,
}: CardProps) {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col">
      <div>
        <Link href={"/"}>
          <Image
            src={"/ahmed.png"}
            height={50}
            width={100}
            className="mb-8"
            alt="ahmed"
          />
        </Link>
      </div>
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          {children}
          {social && (
            <Button variant="outline" className="w-full mt-2">
              Login with Google
            </Button>
          )}
          {toNavigate && (
            <div className="mt-4 text-center text-sm">
              {navigateText}
              <Link href={navigatelink} className="underline">
                {toNavigate}
              </Link>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
