import dbConnect from "@/backend/config/dbConfig";
// import nc from "next-connect";
import { allRooms } from "@/backend/controllers/roomControllers";
import { createEdgeRouter } from "next-connect";
import { NextRequest } from "next/server";

interface RequestContext {
  params: {
    id: string;
  };
}

const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

router.get(allRooms);

export async function GET(request: NextRequest, ctx: RequestContext) {
  return router.run(request, ctx);
}
// const handler = nc();

// handler.get(allRooms);

// export default handler;
