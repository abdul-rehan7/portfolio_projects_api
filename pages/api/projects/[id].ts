// pages/api/projects/[id].ts
import type { NextApiRequest, NextApiResponse } from "next";
import projects from "@/data/projects";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  const project = projects.find(p => p.id === parseInt(id as string));

  if (project) {
    res.status(200).json(project);
  } else {
    res.status(404).json({ message: "Project not found" });
  }
}
