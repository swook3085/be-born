import { NextApiResponse } from "next";
import type { NextRequest } from "next/server";

export default async function (req: NextRequest, res: NextApiResponse) {
  return res.status(200).json({
    data: "hello",
  });
}
