import axios from "axios";
import { Resend } from "resend";

const resend: any = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
export async function POST(req: Request) {
  try {
    //send otp
    const { email, otp } = await req.json();
    const message = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["ashish.ranjanbca2021175@imsnoida.com", email],
      subject: "Reset Password - CarLand",
      html: `<strong>Hello CarLand User,</strong> <br>
      We have recieved a request to reset your password.  <br>
      <b>OTP </b> : <i>${otp}</i> <br>
      <i>It is valid only for 5 minutes.</i> <br>
      Thanks, <br> CarLand Pvt. Ltd. `,
    });
    return Response.json(message, { status: 200 });
  } catch (err) {
    return Response.json(err, { status: 500 });
  }
}
