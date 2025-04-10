
import Breadcrumb from "@/Components/modules/breadcrumb/BreadCrumb";
import Footer from "@/Components/modules/footer/Footer";
import Navbar from "@/Components/modules/navbar/Navbar";
import Form from "@/Components/templates/contact-us/Form";
import Information from "@/Components/templates/contact-us/Information";
import styles from "@/styles/contact-us.module.css";

import { authUser } from "@/utils/severHelpers";

const page = async () => {

const user = await authUser()
let islogin= null
if (user){
  islogin = JSON.parse(JSON.stringify(user))
}else{
  islogin= null
}


  return (
    <>
      <Navbar isLogin={islogin} />
      <Breadcrumb route={"تماس با ما"} />

     


      <div className={styles.container}>


        <div className="grid grid-cols-2 gap-8 max-lg:grid-cols-1">
          <Information />
          <Form />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default page;
