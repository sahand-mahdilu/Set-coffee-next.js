
import Breadcrumb from "@/Components/modules/breadcrumb/BreadCrumb";
import Footer from "@/Components/modules/footer/Footer";
import Navbar from "@/Components/modules/navbar/Navbar";
import Form from "@/Components/templates/contact-us/Form";
import Information from "@/Components/templates/contact-us/Information";
import styles from "@/styles/contact-us.module.css";
import { verifyToken } from "@/utils/auth";
import { cookies } from "next/headers";
import { UserModel } from "../../../models/User";

const page = async () => {

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
      } else {
        console.log("Token payload is not valid or does not contain 'username'.");
      }
    }
  

  return (
    <>
      <Navbar isLogin={user} />
      <Breadcrumb route={"تماس با ما"} />
      <div className={styles.container}>
        <div className={styles.contents}>
          <Information />
          <Form />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default page;
