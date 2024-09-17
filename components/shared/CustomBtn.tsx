import React, { ReactNode } from "react";
import { Button } from "../ui/button";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { cn } from "@/lib/utils";

type ButtonProp = {
  children: ReactNode;
  onclick?: () => void;
  loading?: boolean;
  type?: "submit";
  loadingText?: string;
  className?: string;
};
const CustomBtn = ({
  className,
  children,
  onclick,
  loading = false,
  loadingText,
  type,
}: ButtonProp) => {
  return (
    <Button
      className={cn("min-w-40", className)}
      onClick={onclick}
      type={type}
      disabled={loading}
    >
      {loading ? (
        <>
          {" "}
          <AiOutlineLoading3Quarters className="animate-spin mr-2" />{" "}
          {loadingText ?? "processing"}
        </>
      ) : (
        <> {children}</>
      )}
    </Button>
  );
};

export default CustomBtn;
