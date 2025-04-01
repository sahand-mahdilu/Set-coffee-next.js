import { IProduct } from "@/app/types/types";
import React from "react";

const MoreInfos = ({product}:{product:IProduct}) => {
  return (
    <div>
      <p>اطلاعات بیشتر :</p>
      <hr />
      <main>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className="font-bold text-xl">وزن</p>
          <p className="font-bold text-xl">{product.weight} گرم</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className="font-bold text-xl">مناسب برای</p>
          <p className="font-bold text-xl">{product.suitableFor} </p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className="font-bold text-xl">میزان بو</p>
          <p className="font-bold text-xl">{product.smell} </p>
        </div>
      </main>
    </div>
  );
};

export default MoreInfos;
