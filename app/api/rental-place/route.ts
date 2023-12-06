import request, { gql } from "graphql-request";

export async function GET(req: Request) {
  const API_URL: any = process.env.NEXT_PUBLIC_API_URL;
  try {
    const query = gql`
      {
        rentalPlaces {
          id
          imgSrc
          order
          placeName
        }
      }
    `;
    const { rentalPlaces }: any = await request(API_URL, query);
    return Response.json(rentalPlaces, { status: 200 });
  } catch (err) {
    return Response.json(err, { status: 500 });
  }
}
