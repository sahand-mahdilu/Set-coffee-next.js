import styles from "@/styles/p-user/wishlist.module.css";
import connectedToDB from "../../../../configs/db";
import { authUser } from "@/utils/severHelpers";
import WishListModel from "../../../../models/WishList";
import UserPanelLayout from "@/Components/layouts/UserPanelLayout";
import Product from "@/Components/templates/p-user/wishlist/Product";
import { PopulatedWish, Wish } from "@/app/types/types";




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
      select: "name price score", 
    })
    .lean()) as PopulatedWish[];

  console.log(wishlist);

  return (
    <UserPanelLayout>
      <main>
        <h1 className={styles.title}>
          <span>علاقه‌مندی‌ها</span>
        </h1>
        <div className={styles.container}>
          {wishlist.length > 0 &&
            wishlist.map((wish) => (
              <Product
                key={wish._id.toString()}
                name={wish.product.name}
                price={wish.product.price}
                score={wish.product.score}
              />
            ))}
        </div>
        {wishlist.length === 0 && (
          <p className={styles.empty}>محصولی وجود ندارد</p>
        )}
      </main>
    </UserPanelLayout>
  );
};

export default page;