import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainLayout from "../components/layouts/MainLayout";
import ShopLayout from "../components/layouts/ShopLayout";
import { runInit } from "../store/actions/InventoryActions";

interface Props {}

const shop = (props: Props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(runInit());
  }, []);
  return (
    <MainLayout>
      <ShopLayout />
    </MainLayout>
  );
};

export default shop;
