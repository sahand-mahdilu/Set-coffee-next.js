import Footer from "@/Components/modules/footer/Footer";
import Navbar from "@/Components/modules/navbar/Navbar";
import styles from "@/styles/aboutUs.module.css";

import Breadcrumb from "@/Components/modules/breadcrumb/BreadCrumb";
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
     <Breadcrumb route={"درباره ما"}/>
      <div className={styles.container}>
        <section className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1">
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
        <main className={`${styles.main} grid grid-cols-2 max-md:grid-cols-1`}>
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
        </main>
      </div>

      <Footer />
    </>
  );
};

export default page;
