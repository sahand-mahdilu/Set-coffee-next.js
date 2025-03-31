
import Footer from "@/Components/modules/footer/Footer";
import Navbar from "@/Components/modules/navbar/Navbar";
import styles from "@/styles/aboutUs.module.css";
import { verifyToken } from "@/utils/auth";
import { cookies } from "next/headers";
import { UserModel } from "../../../models/User";

const page = async () => {


    //  getting token form cookies

  const cookieInstant = cookies();

  const token = (await cookieInstant).get("token")?.value;//string

  let user = null;

 


  //  checking if there is a token or not  logged in /notlogged in

  if (token) {

    // verifying token
    const tokenPayload = verifyToken(token);
  
    if (typeof tokenPayload === "object" && tokenPayload !== null && "username" in tokenPayload) {

      // finding user
      user = await UserModel.findOne({ username: tokenPayload.username });
  
      
    } else {
      console.log("Token payload is not valid or does not contain 'username'.");
    }
  }
  

  return (
    <>
      <Navbar isLogin={user} />
      {/* <Breadcrumb route={"درباره ما"} /> */}
      <div className={styles.container}>
        <section>
          <div>
            <span>درباره ما</span>
            <p>فنجان داغ خوارزمی قهوه ست</p>
          </div>
          <p>
            تجربه‌ای به قدمت چهار نسل و ارتباط مستمر با مصرف کنندگان ضامن این
            ویژگی‌هاست. از ویژگی‌های بارز مجموعه قهوه ست واردات مواد اولیه راسا
            به وسیله مدیریت مجموعه و انتخاب بهترین مواد اولیه جهت تولید قهوه
            است.
          </p>
          <p>
            مجموعه قهوه ست اولین مجموعه مرتبط با قهوه در ایران است که در سال
            2007 به عضویت انجمن تخصصی قهوه اروپا (Speciality coffee association
            of Europe) در آمده است.
          </p>
        </section>
        <main className={styles.main}>
          <div>
            <p>
              مسیری را که بنیان‌گذاران «قهوه ست» در دهه 20 شمسی آغاز کرده‌اند
              اکنون وارد مرحله جدیدی شده است و مفتخریم اعلام کنیم در بهمن ماه 94
              موفق به اخذ مجوزهای مربوطه از وزارت بهداشت درمان و آموزش پزشکی و
              سازمان غذا دارو شده‌ایم و تولید سنتی و محدود قهوه را تبدیل به
              تولید صنعتی و انبوه کرده‌ایم.
            </p>
            <p>
              از دیگر افتخارات مجموعه «قهوه ست» اخذ مدرک دیپلم دانش قهوه از
              انجمن قهوه تخصصی اروپا در فروردین ماه سال 95 است. (SCAE Coffee
              Diploma)
            </p>
            <p>
              امید داریم با کسب دانش روز دنیا در این صنعت ارتقا کیفیت و تنوع
              محصول در حد استانداردهای جهانی را در آینده‌ای نزدیک شاهد باشیم.
            </p>
            <p>صاحب امتیاز: شرکت فنجان داغ خوارزمی</p>
          </div>
          <div>
            <span>Set Coffee</span>
            <p className={styles.title}>داستان قهوه ست</p>
            <p>
              تجربه‌ای به قدمت چهار نسل و ارتباط مستمر با مصرف کنندگان ضامن این
              ویژگی‌هاست. از ویژگی‌های بارز مجموعه قهوه ست واردات مواد اولیه
              راسا به وسیله مدیریت مجموعه و انتخاب بهترین مواد اولیه جهت تولید
              قهوه است.
            </p>
            <p>
              مجموعه قهوه ست اولین مجموعه مرتبط با قهوه در ایران است که در سال
              2007 به عضویت انجمن تخصصی قهوه اروپا (Speciality coffee
              association of Europe) در آمده است و بسیاری از دوره‌های مربوط به
              فرآوری قهوه را مدیریت این مجموعه به صورت تخصصی در کارگاه‌های
              آموزشی این انجمن و همچنین کارگاه‌های تخصصی فرآوری قهوه به خصوص در
              زمینه بو دادن قهوه(Roasting) را در کشور آمریکا که از پیشگامان این
              صنعت است را گذرانده است. اکنون با پشتوانه دستاوردهای گذشته و
              تکنولوژی روز دنیا وارد مرحله تولید قهوه به صورت صنعتی و گسترده
              شده‌ایم و مفتخریم اعلام کنیم که «قهوه ست» از این پس یک نام تجاری
              صنعتی در صنعت قهوه ایران است
            </p>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default page;
