import styles from "@/styles/product.module.css";


import Navbar from "@/Components/modules/navbar/Navbar";
import Footer from "@/Components/modules/footer/Footer";
import Gallery from "@/Components/templates/products/Gallery";
import Detailes from "@/Components/templates/products/Detailes";
import MoreProducts from "@/Components/templates/products/MoreProducts";
import Tabs from "@/Components/templates/products/Tabs";
import connectedToDB from "../../../../configs/db";

import { Params } from "@/app/types/types";
import { authUser } from "@/utils/severHelpers";
import ProductModel from "../../../../models/product";

const product = async ({ params }: { params: Params }) => {
  

  const user = await authUser()

  await connectedToDB();

  const productID = params.id;
  const product = await ProductModel.findOne({ _id: productID }).populate(
    "comments"
  );

  if (!product) {
    console.error(`Product with ID ${productID} not found.`);
    return (
      <div>
        <Navbar isLogin={user||null} />
        <p>محصول مورد نظر یافت نشد.</p>
        <Footer />
      </div>
    );
  }

  const relatedProducts = await ProductModel.find({ smell: product.smell });

  return (
    <div className={styles.container}>
      <Navbar isLogin={user||null} />
      <div data-aos="fade-up" className={styles.contents}>
        <div
          className={`${styles.main} flex   max-md:flex-col max-md:items-center`}
        >
          <Gallery />
          <Detailes product={JSON.parse(JSON.stringify(product))} />
        </div>
        <Tabs product={JSON.parse(JSON.stringify(product))} />
        <MoreProducts
          relatedProducts={JSON.parse(JSON.stringify(relatedProducts))}
        />
      </div>
      <Footer />
    </div>
  );
};

export default product;
