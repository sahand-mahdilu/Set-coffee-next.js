
import UserPanelLayout from "@/Components/layouts/UserPanelLayout";
import Box from "@/Components/templates/p-user/Box";
import Orders from "@/Components/templates/p-user/Orders";
import Tickets from "@/Components/templates/p-user/Tickets";
import styles from "@/styles/p-user/index.module.css";

const page = () => {
  return (
    <UserPanelLayout>
      <main>
        <section className={styles.boxes}>
          <Box title="مجموع تیکت ها " value="20" />
          <Box title="مجموع کامنت ها " value="0" />
          <Box title="مجموع سفارشات" value="2" />
          <Box title="مجموع علاقه مندی ها" value="10" />
        </section>
        <section className={styles.contents}>
          <Tickets />
          <Orders />
        </section>
      </main>
    </UserPanelLayout>
  );
};

export default page;
