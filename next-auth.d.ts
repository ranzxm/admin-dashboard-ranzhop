// import { type DefaultSession } from "next-auth";

// export type ExtendedUser = DefaultSession["user"] & {
//   role: "ADMIN" | "USER";
// };

// declare module "next-auth" {
//   interface Session {
//     user: ExtendedUser
//     token : {
//         role : any
//     }
//   }

//   import { JWT } from "next-auth/jwt";

//   declare module "next-auth/jwt" {
//     interface JWT {
//       role: "ADMIN" | "USER";
//     }
//   }
// }
