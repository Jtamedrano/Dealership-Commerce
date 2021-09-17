import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainLayout from "../components/layouts/MainLayout";
import ShopLayout from "../components/layouts/ShopLayout";
import { runInit } from "../store/actions/InventoryActions";
import { init } from "../store/reducers/inventoryReducer";

interface Props {}

const shop = (props: Props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(init);
  }, []);
  return (
    <MainLayout>
      <ShopLayout />
    </MainLayout>
  );
};

export default shop;
