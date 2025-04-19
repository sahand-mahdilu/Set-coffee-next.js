import Link from "next/link";
import styles from "./order.module.css";
import { OrderProps } from "@/app/types/types";



const Order: React.FC<OrderProps> = ({ name, price, count, img, id }) => {

 

  const handleDelete = () => {
    
    const storedOrders = JSON.parse(localStorage.getItem("cart") || "[]");
    
   
    const updatedOrders = storedOrders.filter((order: OrderProps) => order.id !== id);
    
   
    localStorage.setItem("cart", JSON.stringify(updatedOrders));
  
      
      window.location.reload();
  };

  return (

    <div>

    
    <Link href={`/product/${id}`} className={styles.card}>
      <div>
        <div>
          <p className="max-sm:text-[12px]">{name}</p>
          <img src={img} alt="image" />
        </div>
        <p className="max-sm:text-[12px]">درانتظار پرداخت</p>
      </div>
      <div>
        <p className="max-sm:text-[12px]">8:00 1402/10/21</p>
        <p className={`${styles.price} max-sm:text-[12px]`}>{price}</p>
       
          <p>تعداد : {count}</p>
         
         
       
      </div>
    </Link>
    <button
            className="bg-red-500 text-white px-2 rounded-xl cursor-pointer hover:bg-red-700"
            onClick={handleDelete}
          >
            حذف
          </button>
    </div>
  );
};

export default Order;