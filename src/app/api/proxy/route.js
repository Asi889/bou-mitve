export const dynamic = 'force-dynamic'; // defaults to auto
import { promises as fs } from 'fs';

export async function GET(request) {
  // const type = request.url.split('/').pop();
  const filePath = process.cwd() + `/data.json`;
  const isFileExists = await fs
    .access(filePath)
    .then(() => true)
    .catch(() => false);
  if (!isFileExists) {
    return Response.error();
  }
  const file = await fs.readFile(process.cwd() + `/data.json`, 'utf8');
  if (!file) {
    return Response.error();
  }

  const data = JSON.parse(file);
  return Response.json({ data });
}
