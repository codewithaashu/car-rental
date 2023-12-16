import request, { gql } from "graphql-request";

export async function POST(req: Request) {
  const API_URL: any = process.env.NEXT_PUBLIC_API_URL;
  try {
    const { name, email, phoneNumber, password, image } = await req.json();
    const query =
      gql`mutation Register {
      createCustomer(
        data: {name: "` +
      name +
      `", email: "` +
      email +
      `", password: "` +
      password +
      `", phoneNumber: "` +
      phoneNumber +
      `", image: "` +
      image +
      `"}
      ) {
        id
        image
        email
        name
        phoneNumber
        createdAt
      }
      publishCustomer(where: {email: "` +
      email +
      `"}) {
        id
      }
    }`;
    const res: any = await request(API_URL, query);
    return Response.json(res, { status: 200 });
  } catch (err) {
    return Response.json(err, { status: 500 });
  }
}
