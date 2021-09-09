import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import ShopLayout from "../components/layouts/ShopLayout";

interface Props {}

const shop = (props: Props) => {
  return (
    <MainLayout>
      <ShopLayout />
    </MainLayout>
  );
};

export default shop;
