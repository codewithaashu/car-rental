import request, { gql } from "graphql-request";

export async function POST(req: Request) {
  const API_URL: any = process.env.NEXT_PUBLIC_API_URL;
  try {
    const { password, email }: any = await req.json();
    const query =
      gql`
        mutation sendOTP {
            updateCustomer(data: {password: "` +
      password +
      `"}, where: {email: "` +
      email +
      `"}) {
              id
              name
              phoneNumber
              email
            }
            publishCustomer(where: {email: "` +
      email +
      `"}) {
        id
      }
          }`;
    const { updateCustomer }: any = await request(API_URL, query);
    return Response.json(updateCustomer, { status: 200 });
  } catch (err) {
    return Response.json(err, { status: 500 });
  }
}
