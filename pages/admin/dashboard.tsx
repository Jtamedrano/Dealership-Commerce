import React from "react";
import { Spinner } from "react-bootstrap";
import AdminLayout from "../../components/layouts/AdminLayout";
import { useAdminMeQuery } from "../../generated/graphql";
import router from "next/router";

interface Props {}

const dashboard = (props: Props) => {
  const [{ fetching, data }] = useAdminMeQuery();

  if (!fetching && !data?.me) {
    router.replace("/admin/login");
  }

  return (
    <main className="admin-container">
      {fetching && <Spinner animation="border" variant="primary" />}
      {data?.me && <AdminLayout admin={data.me} />}
    </main>
  );
};

export default dashboard;
