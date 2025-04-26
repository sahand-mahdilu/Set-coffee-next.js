import styles from "@/styles/p-user/wishlist.module.css";
import connectedToDB from "../../../../configs/db";
import { authUser } from "@/utils/severHelpers";
import WishListModel from "../../../models/WishList";
import UserPanelLayout from "@/Components/layouts/UserPanelLayout";
import Product from "@/Components/templates/p-user/wishlist/Product";
import { PopulatedWish } from "@/app/types/types";

const page = async () => {
  await connectedToDB();
  const user = await authUser();

  if (!user) {
    return (
      <UserPanelLayout>
        <main>
          <p className={styles.empty}>لطفاً وارد حساب کاربری شوید.</p>
        </main>
      </UserPanelLayout>
    );
  }

  const wishlist = (await WishListModel.find({ user: user._id })
    .populate<PopulatedWish>({
      path: "product",
      model: "Product",
      select: "name price score img",
    })
    .lean()) as PopulatedWish[];

  const validWishlist = wishlist.filter((wish) => wish.product);






  return (
    <UserPanelLayout>
      <main>
        <h1 className={styles.title}>
          <span>علاقه‌مندی‌ها</span>
        </h1>
        <div className={styles.container}>
          {validWishlist.length > 0 ? (
            validWishlist.map((wish) => (
              <Product
                productId={String(wish.product._id)}
                key={wish._id.toString()}
                name={wish.product.name}
                price={wish.product.price}
                score={wish.product.score}
                img={ `https://set-coffee-sahand.liara.run/${wish.product.img.slice(22)}` }
              />
            ))
          ) : (
            <p className={styles.empty}>محصولی وجود ندارد</p>
          )}
        </div>
      </main>
    </UserPanelLayout>
  );
};

export default page;
