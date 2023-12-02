import request, { gql } from "graphql-request";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const API_URL: any = process.env.NEXT_PUBLIC_API_URL;
  try {
    const { city, pickUpDate, dropOffDate }: any = await req.json();
    const query = gql`{
        cars(where: {availableCity: ${city}}) {
          id
          dailyPrice
          imgSrc
          manufactureCompany
          milege
          model
          pickupLocation
          seat
          availableCity
          bookDate
        }
      }`;
    const result: any = await request(API_URL, query);
    const carsList = result?.cars;
    const availablCarsList = carsList?.filter((curr: any, index: any) => {
      return (
        !curr.bookDate.includes(pickUpDate) &&
        !curr.bookDate.includes(dropOffDate)
      );
    });
    return Response.json(availablCarsList, { status: 200 });
  } catch (err) {
    return Response.json(err, { status: 500 });
  }
}
