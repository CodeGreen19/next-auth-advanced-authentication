import authConfig from "./auth.config";
import NextAuth from "next-auth";
import { AUTH_REQUIRED_ROUTES, AUTH_ROUTE, PUBLIC_ROUTE } from "./routes";

export const { auth: middleware } = NextAuth(authConfig);

// export default auth((req) => {
//   const { nextUrl } = req;
//   const isLoggedIn = !!req.auth;

//   // const isPublicRoute = PUBLIC_ROUTE.includes(nextUrl.pathname);
//   // const isAuthRoute = AUTH_ROUTE.includes(nextUrl.pathname);
//   // const isAuthRequiredRoute = AUTH_REQUIRED_ROUTES.includes(nextUrl.pathname);
//   if (nextUrl.pathname === "/profile" && !isLoggedIn) {
//     console.log("something has come here");

//     return Response.redirect(new URL("login", nextUrl));
//   }
//   // if (isAuthRequiredRoute && !isLoggedIn) {
//   //   console.log("something has come here");

//   //   return Response.redirect(new URL("login", nextUrl));
//   // }
//   return;
//   // if (isAuthRoute && isLoggedIn) {
//   //   return Response.redirect(new URL("/", nextUrl));
//   // }
// });

// export const config = {
//   matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"], // the path right here is used to allow where the middleware can invoked in our app !
// };
