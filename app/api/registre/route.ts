import { getEspLastRegistre } from "@utils";

export async function GET() {
  const data = await getEspLastRegistre();
  return Response.json(data);
}
