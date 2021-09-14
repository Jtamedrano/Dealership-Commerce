import React from "react";
import { useSelector } from "react-redux";
import MainLayout from "../components/layouts/MainLayout";
import ShopLayout from "../components/layouts/ShopLayout";

interface Props {}

const shop = (props: Props) => {
  const state = useSelector((store: RStore) => store);
  return (
    <MainLayout>
      <ShopLayout />
    </MainLayout>
  );
};

export default shop;
