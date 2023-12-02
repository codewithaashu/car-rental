import { request, gql } from "graphql-request";
import { NextResponse } from "next/server";
export async function GET(req: Request) {
  const API_URL: any = process.env.NEXT_PUBLIC_API_URL;
  try {
    const query = gql`
      {
        cars {
          dailyPrice
          id
          milege
          model
          pickupLocation
          imgSrc
          seat
          vehicleId
        }
      }
    `;
    const data = await request(API_URL, query);
    return NextResponse.json(data, {
      status: 200,
    });
  } catch (err) {
    return Response.json(err, {
      status: 500,
    });
  }
}
