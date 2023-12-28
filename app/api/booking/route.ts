import request, { gql } from "graphql-request";

export async function POST(req: Request) {
  const API_URL: any = process.env.NEXT_PUBLIC_API_URL;
  try {
    const {
      name,
      address,
      city,
      state,
      contactNumber,
      aadharNumber,
      aadharImage,
      drivingLicenseNumber,
      drivingLicenseImage,
      pickUpLocation,
      pickUpInfo,
      dropOffInfo,
      vehicleID,
      userEmail,
    } = await req.json();
    const mutationQuery =
      gql`mutation Booking {
    createBooking(
        data: {name: "` +
      name +
      `", address: "` +
      address +
      `", drivingLicenseNumber: "` +
      drivingLicenseNumber +
      `", city: "` +
      city +
      `", state: "` +
      state +
      `", contactNumber: "` +
      contactNumber +
      `", aadharNumber: "` +
      aadharNumber +
      `", pickupLocation: "` +
      pickUpLocation +
      `",pickUpInfo:"` +
      new Date(pickUpInfo).toISOString() +
      `",dropOffInfo:"` +
      new Date(dropOffInfo).toISOString() +
      `",aadharImage:"` +
      aadharImage +
      `",drivingLicenseImage:"` +
      drivingLicenseImage +
      `",car: {connect: {id: "` +
      vehicleID +
      `"}},customerBookings: {connect: {email: "` +
      userEmail +
      `"}}}
  ) {
    id
    createdAt
    name
    address
    city
    state
    contactNumber
    pickupLocation
    pickUpInfo
    dropOffInfo
    aadharNumber
    aadharImage
    drivingLicenseNumber
    drivingLicenseImage
    car {
      dailyPrice
      imgSrc
    }
    customerBookings {
      email
      name
      phoneNumber
    }
  }
  publishCustomer(where: {email: "` +
      userEmail +
      `"}){
        id
        email
      }
}`;
    const { createBooking }: any = await request(API_URL, mutationQuery);
    return Response.json(createBooking, { status: 200 });
  } catch (err) {
    return Response.json(err, { status: 500 });
  }
}
