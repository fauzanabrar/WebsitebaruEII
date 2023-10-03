import { NextResponse } from "next/server";
import { getFile, getFileContent, listFiles } from "@/lib/gdrive";
import { NextApiRequest } from "next";
import { Readable, Stream } from "stream";

type ParamsType = {
  params: {
    id: string;
  };
};

export async function GET(request: NextApiRequest, { params }: ParamsType) {
  const files: string = (await getFileContent(params.id) as string);

  return NextResponse.json({
    status: 'success',
    files,
  })
}
