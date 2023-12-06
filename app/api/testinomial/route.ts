import request, { gql } from "graphql-request";

export async function GET(req: Request) {
  const API_URL: any = process.env.NEXT_PUBLIC_API_URL;
  try {
    const query = gql`
      {
        testinomials {
          authorName
          content
          id
          imgSrc
        }
      }
    `;
    const res: any = await request(API_URL, query);
    return Response.json(res?.testinomials, { status: 200 });
  } catch (err) {
    return Response.json(err, { status: 500 });
  }
}
