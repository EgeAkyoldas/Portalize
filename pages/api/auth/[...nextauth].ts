import NextAuth from "next-auth"
import Providers from 'next-auth/providers'
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from 'next-auth/providers/google'
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../database/connect";
import { MongoClient } from "mongodb";
import CredentialsProvider from "next-auth/providers/credentials"



export default NextAuth({


  session: { 
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
},
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID  as string ,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      type: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const credentialDetails = {
          email: credentials.email,
          password: credentials.password,
        };

        const resp = await fetch("/api/auth/login", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentialDetails),
        });
        const user = await resp.json();
        if (user.is_success) {
          console.log("nextauth daki user: " + user.is_success);

          return user;
        } else {
          console.log("check your credentials");
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/signin",

  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.email = user.data.auth.email;
        token.username = user.data.auth.userName;
        token.user_type = user.data.auth.userType;
        token.accessToken = user.data.auth.token;
      }

      return token;
    },
    session: ({ session, token, user }) => {
      if (token) {
        session.user.email = token.email;
        session.user.username = token.userName;
        session.user.accessToken = token.accessToken;
      }
      return session;
    },
    signIn: async function signIn(user, account, metadata) {
      if (account.provider === 'github') {    
          const githubUser = {
              id: metadata.id,
              login: metadata.login,
              name: metadata.name,
              avatar: user.image
          }
        }
        user.accessToken = await getTokenFromYourAPIServer('github', githubUser)
        return true
      }, 
  },
})