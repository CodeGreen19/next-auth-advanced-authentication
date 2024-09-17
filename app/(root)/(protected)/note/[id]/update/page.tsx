import { Button } from "@/components/ui/button";
import React from "react";

const UpdateNotes = () => {
  return (
    <div className="mt-5">
      <textarea
        className="w-full h-64 rounded-lg shadow-[inset_0_0_5px_#c8c8c8] p-3 resize-none outline-none bg-slate-50 ring-gray-500 focus:ring-1 ring-offset-2"
        placeholder="type your notes"
      ></textarea>
      <div className="w-full flex items-center justify-end my-6">
        <Button>Update</Button>
      </div>
    </div>
  );
};

export default UpdateNotes;
