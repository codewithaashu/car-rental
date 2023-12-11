import Razorpay from "razorpay";
const shortid = require("shortid");
export async function POST(req: Request, res: Response) {
  // Initialize razorpay object
  const razorpay_id: any = process.env.NEXT_PUBLIC_RAZORPAY_ID;
  const razorpay: any = new Razorpay({
    key_id: razorpay_id,
    key_secret: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
  });

  //get booking id and billing amount from request body
  const { bookingID, billingAmount } = await req.json();

  // Create an order
  const payment_capture = 1;
  const amount = billingAmount;
  const currency = "INR";
  const options = {
    amount: (amount * 100).toString(),
    currency,
    receipt: (shortid as any).generate(),
    payment_capture,
    notes: {
      paymentFor: "car booking",
      userId: "ashya2616",
      bookingID,
    },
  };
  try {
    // Generate the OrderID
    const response = await razorpay.orders.create(options);
    //Send it to the Front-end
    return Response.json(
      {
        id: response.id,
        currency: response.currency,
        amount: response.amount,
      },
      { status: 200 }
    );
  } catch (err) {
    return Response.json(err, { status: 500 });
  }
}
