import NextAuth from "next-auth/next";
import googleProvider from "next-auth/providers/google";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { cert } from "firebase-admin/app";

export const authOptions = {
  // eslint-disable-next-line new-cap
  adapter: FirestoreAdapter({
    credential: cert({
      projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
      clientEmail: process.env.NEXT_PUBLIC_CLIENT_EMAIL,
      privateKey: process.env.NEXT_PUBLIC_PRIVATE_KEY,
    }),
  }),
  providers: [
    googleProvider({
      profile(profile) {
        return {
          id: profile.sub,
          role: "hacker",
          email: profile.email,
          name: profile.name,
          picture: profile.picture,
        };
      },
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      console.log(user);
      if (user) token.role = user.role;
      return token;
    },
    session({ session, user }) {
      session.user = user;
      // console.log(session);
      return session;
    },
  },
};
// eslint-disable-next-line new-cap
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
