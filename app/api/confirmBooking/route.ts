import request, { gql } from "graphql-request";

export async function POST(req: Request) {
  const API_URL: any = process.env.NEXT_PUBLIC_API_URL;
  try {
    const { paymentId, orderId, paymentAmount, id } = await req.json();
    const query =
      gql`
      mutation publishedBooking {
        updateBooking(
          data: {
            paymentId: "` +
      paymentId +
      `"
            orderId: "` +
      orderId +
      `"
            paymentAmount:"` +
      paymentAmount +
      `"
          }
          where: { id: "` +
      id +
      `" }
        ) {
            id
            paymentId
            name
            contactNumber
            address
            city
            state
            aadharNumber
            aadharImage
            drivingLicenseNumber
            drivingLicenseImage
            pickUpInfo
            dropOffInfo
            pickupLocation
            paymentAmount
            car {
                model
                plateNumber
              }
        }
        publishBooking(where: { id:"` +
      id +
      `" }) {
          id
        }
      }
    `;
    const { updateBooking }: any = await request(API_URL, query);
    return Response.json(updateBooking, { status: 200 });
  } catch (err) {
    return Response.json(err, { status: 500 });
  }
}
