// pages/api/projects/index.ts
import type { NextApiRequest, NextApiResponse } from "next";
import projects from "../../../data/projects";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // CORS FIX
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight request
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Your actual GET handler
  if (req.method === "GET") {
    return res.status(200).json(projects);
  } else {
    res.setHeader("Allow", ["GET"]);
    return res
      .status(405)
      .end(`Method ${req.method} Not Allowed`);
  }
}
