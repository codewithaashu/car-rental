import request, { gql } from "graphql-request";

export async function POST(req: Request) {
  const API_URL: any = process.env.NEXT_PUBLIC_API_URL;
  try {
    const { email } = await req.json();
    const query =
      gql`{
        customer(where: {email: "` +
      email +
      `"}) {
          id
          bookingIDs {
            id
            name
            contactNumber
            paymentId
            paymentAmount
            pickUpInfo
            pickupLocation
            dropOffInfo
            totalAmount
            car {
              model
              plateNumber
              imgSrc
            }
          }
        }
      }`;
    const { customer }: any = await request(API_URL, query);
    return Response.json(customer, { status: 200 });
  } catch (err) {
    return Response.json(err, { status: 500 });
  }
}
