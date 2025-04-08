import { cookies } from "next/headers";
import { UserModel } from "../../models/User";
import { verifyToken } from "./auth";
import connectedToDB from "../../configs/db";

const authUser = async () => {
 
 //  getting token form cookies


 const cookieInstant = cookies();

 const token = (await cookieInstant).get("token")?.value; //string

 let user = null;

 //  checking if there is a token or not  logged in /notlogged in

 if (token) {
   // verifying token
   const tokenPayload = verifyToken(token);

   if (
     typeof tokenPayload === "object" &&
     tokenPayload !== null &&
     "username" in tokenPayload
   ) {
     // finding user
     user = await UserModel.findOne({ username: tokenPayload.username });
     return user
   } else {
     console.log("Token payload is not valid or does not contain 'username'.");
   }
 }

}





const authAdmin = async () => {
 
  //  getting token form cookies
 
 
  const cookieInstant = cookies();
 
  const token = (await cookieInstant).get("token")?.value; //string
 
  let user = null;
 
  //  checking if there is a token or not  logged in /notlogged in
 
  if (token) {
    // verifying token
    const tokenPayload = verifyToken(token);
 
    if (
      typeof tokenPayload === "object" &&
      tokenPayload !== null &&
      "username" in tokenPayload
    ) {
      // finding user
      user = await UserModel.findOne({ username: tokenPayload.username });

      if(user?.role==="ADMIN"){
        return user
      }else{
        return null
      }


    } else {
      return null
    }
  }else{
    return null
  }
 
 }
 








export{authUser,authAdmin}