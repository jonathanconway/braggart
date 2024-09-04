import { BragType } from "./brag-type";

const created = new Date("2024-05-01 19:00:00").getTime();

export const DEFAULT_BRAG_TYPES: readonly BragType[] = [
  {
    id: "project-completed",
    title: "Project Completed",
    keychar: "p",
    metrics: [],
    created,
  },
  {
    id: "code-reviewed",
    title: "Code Reviewed",
    keychar: "r",
    metrics: [
      {
        id: "no-of-comments",
        title: "# of comments",
      },
      {
        id: "no-of-comments-actions",
        title: "# of comments actioned",
      },
      {
        id: "no-of-coding-guidelines-improved",
        title: "# of coding guidelines improved",
      },
    ],
    created,
  },
  {
    id: "mentored",
    title: "Mentored",
    keychar: "m",
    metrics: [],
    created,
  },
  {
    id: "solution-designed",
    title: "Solution Designed",
    keychar: "s",
    metrics: [],
    created,
  },
  {
    id: "knowledge-shared",
    title: "Knowledge Shared",
    keychar: "k",
    metrics: [],
    created,
  },
  {
    id: "new-initiative-conceived",
    title: "New Initiative",
    keychar: "n",
    metrics: [],
    created,
  },
];
