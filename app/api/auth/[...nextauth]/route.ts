import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";

const GoogleId: any = process.env.GOOGLE_CLIENT_ID;
const GoogleSecret: any = process.env.GOOGLE_CLIENT_SECRET;
const GithubId: any = process.env.GITHUB_CLIENT_ID;
const GithubSecret: any = process.env.GITHUB_CLIENT_SECRET;
const FacebookId: any = process.env.FACEBOOK_CLIENT_ID;
const FacebookSecret: any = process.env.FACEBOOK_CLIENT_SECRET;

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: GoogleId,
      clientSecret: GoogleSecret,
    }),
    GithubProvider({
      clientId: GithubId,
      clientSecret: GithubSecret,
    }),
    FacebookProvider({
      clientId: FacebookId,
      clientSecret: FacebookSecret,
    }),
  ],
});

export { handler as GET, handler as POST };
