
import Footer from "@/Components/modules/footer/Footer";
import Navbar from "@/Components/modules/navbar/Navbar";
import Stepper from "@/Components/modules/stepper/Stepper";
import Table from "@/Components/templates/cart/Table";
import styles from "@/styles/cart.module.css";
import { authUser } from "@/utils/severHelpers";


const page = async() => {
    const user = await authUser()
    let islogin= null
    if (user){
      islogin = JSON.parse(JSON.stringify(user))
    }else{
      islogin= null
    }
    
  return (
    <>
      <Navbar isLogin={islogin}/>
      <Stepper step="cart" />

      <main className={styles.cart} data-aos="fade-up">
        <Table />
      </main>

      {/* <div class={styles.cart_empty} data-aos="fade-up">
                <TbShoppingCartX />
                <p>سبد خرید شما در حال حاضر خالی است. </p>
                <span>قبل از تسویه حساب، باید چند محصول را به سبد خرید خود اضافه کنید.</span>
                <span>در صفحه "فروشگاه"، محصولات جالب زیادی خواهید یافت.</span>
                <div>
                    <Link href='/category'>بازگشت به فروشگاه</Link>
                </div>
            </div> */}
      <Footer />
    </>
  );
};

export default page;
