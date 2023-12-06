import request, { gql } from "graphql-request";

export async function POST(req: Request) {
  const API_URL: any = process.env.NEXT_PUBLIC_API_URL;
  try {
    const { name, email, phone, subject, message } = await req.json();
    const query =
      gql`
      mutation Message {
        createMessage(
          data: { name: "` +
      name +
      `", email: "` +
      email +
      `", phone: "` +
      phone +
      `", subject: "` +
      subject +
      `", message: "` +
      message +
      `" }
        )
        {
            id
            message
            name
          }
      }
    `;
    const { createMessage }: any = await request(API_URL, query);

    return Response.json(createMessage, { status: 200 });
  } catch (err) {
    return Response.json(err, { status: 500 });
  }
}
