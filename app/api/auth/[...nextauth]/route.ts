import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const GoogleId: any = process.env.GOOGLE_CLIENT_ID;
const GoogleSecret: any = process.env.GOOGLE_CLIENT_SECRET;

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: GoogleId,
      clientSecret: GoogleSecret,
    }),
  ],
});

export { handler as GET, handler as POST };
