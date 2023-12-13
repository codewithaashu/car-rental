import request from "graphql-request";

export async function POST(req: Request) {
  const API_URL: any = process.env.NEXT_PUBLIC_API_URL;
  try {
    const { email } = await req.json();
    const query =
      `{
            customer(where: {email: "` +
      email +
      `"}) {
              id
              image
              name
              password
              phoneNumber
              email
            }
          }`;
    const { customer }: any = await request(API_URL, query);
    return Response.json(customer, { status: 200 });
  } catch (err) {
    return Response.json(err, { status: 500 });
  }
}
