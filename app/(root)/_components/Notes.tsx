import React, { Fragment } from "react";
import NoteCard from "./NoteCard";
import { NoteType } from "@/types";
import { Button } from "@/components/ui/button";
import Link from "next/link";

let notes: NoteType[] = [
  {
    id: "86f04984-5841-453a-9537-0922481c379e",
    date: new Date("2023-01-01"),
    notes:
      "Met with client to discuss the project proposal in detail. We reviewed the scope, timeline, and budget, and agreed on the next steps.",
  },
  {
    id: "95f73482-7583-474a-9321-5412a9821c37",
    date: new Date("2023-02-15"),
    notes:
      "Successfully completed phase 1 of the project. The data analysis team has begun their work, and we are on track to meet the project deadline.",
  },
  {
    id: "34f27581-2648-4654-9812-6723b2581c37",
    date: new Date("2023-03-20"),
    notes:
      "Attended a webinar on the latest advancements in AI technologies. Learned about new tools and techniques that could be applied to our projects.",
  },
  {
    id: "12f89483-7829-4352-9713-7834c1791c37",
    date: new Date("2023-04-05"),
    notes:
      "Sent a follow-up email to a potential investor. Highlighted the key strengths of our project and requested a meeting to discuss further.",
  },
  {
    id: "56f38485-9217-4256-9614-8945d3601c37",
    date: new Date("2023-05-10"),
    notes:
      "Held a team meeting to review project progress. Discussed any challenges or roadblocks and developed strategies to address them.",
  },
  {
    id: "77f51486-3498-4157-9515-9056e2711c37",
    date: new Date("2023-06-25"),
    notes:
      "Submitted the final report to the client. The report was well-received, and the client expressed satisfaction with the project outcome.",
  },
  {
    id: "88f62487-4789-4058-9416-0167f3821c37",
    date: new Date("2023-07-08"),
    notes:
      "Prepared a presentation for the upcoming industry conference. Focused on the key findings and insights from our recent project.",
  },
  {
    id: "99f73488-597a-4959-9317-1278g4931c37",
    date: new Date("2023-08-12"),
    notes:
      "Received positive feedback on the project from the client. They were impressed with the quality of our work and expressed interest in future collaborations.",
  },
  {
    id: "00f84489-6b6b-4860-9218-2389h5041c37",
    date: new Date("2023-09-20"),
    notes:
      "Started working on a new project proposal. Conducted market research and identified potential opportunities for growth and innovation.",
  },
  {
    id: "11f9548a-7d7c-4761-9119-3490i6151c37",
    date: new Date("2023-10-05"),
    notes:
      "Attended a networking event to connect with potential partners. Had productive conversations with several industry leaders and exchanged information on upcoming projects.",
  },
  {
    id: "22fa648b-8f8d-4662-9020-45a1j7261c37",
    date: new Date("2023-11-15"),
    notes:
      "Completed the data analysis for the new project. The findings were insightful and provided valuable information for the next phase of development.",
  },
  {
    id: "33fb748c-9e9e-4563-9921-56b2k8371c37",
    date: new Date("2023-12-20"),
    notes:
      "Scheduled a meeting with a potential client to discuss their needs and how our services could benefit them. The meeting went well, and we are optimistic about the possibility of securing the project.",
  },
  {
    id: "44fc848d-a0a0-4464-9822-67c3l9481c37",
    date: new Date("2024-01-01"),
    notes:
      "Set new goals for the year, including increasing our market share, expanding our team, and developing new product offerings.",
  },
  {
    id: "55fd948e-b1b1-4365-9723-78d4m0591c37",
    date: new Date("2024-02-15"),
    notes:
      "Began work on a new project that involves developing a cutting-edge technology solution. We are excited about the potential impact of this project and the opportunities it presents.",
  },
  {
    id: "66fe048f-c2c2-4266-9624-89e5n16a1c37",
    date: new Date("2024-03-20"),
    notes:
      "Presented the project findings at a conference. The presentation was well-received by the audience, and we generated significant interest in our work.",
  },
];

const Notes = () => {
  return (
    <Fragment>
      {notes.length === 0 ? (
        <div className="min-h-96 w-full flex items-center justify-center flex-col space-y-6">
          <h1>just write down to be organized</h1>
          <Link href={"/create"}>
            <Button>Create note </Button>
          </Link>
        </div>
      ) : (
        <div className="my-5">
          <h1 className=" mb-3">All Notes (50)</h1>
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 ">
            {notes.map((note, i) => (
              <NoteCard note={note} key={i} />
            ))}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Notes;
