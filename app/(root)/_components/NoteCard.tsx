import { NoteType } from "@/types";
import { format } from "date-fns";
import Link from "next/link";
import React from "react";

const NoteCard = ({ note }: { note: NoteType }) => {
  return (
    <Link href={`/note/${note.id}`}>
      <div className="w-full bg-gray-100 rounded-md drop-shadow-lg hover:ring-1 ring-gray-400 p-3 hover:ring-offset-2 transition-all hover:bg-gray-200">
        <h1 className="mb-2">{format(note.date, "PP")}</h1>
        <p className="line-clamp-4">{note.notes}</p>
      </div>
    </Link>
  );
};

export default NoteCard;
