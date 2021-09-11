import React from "react";
import AutoTable from "../parts/Auto/AutoTable";

interface AdminLayoutProps {
  admin: { __typename?: "Admin" | undefined; id: number; username: string };
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ admin }) => {
  return (
    <div className="admin">
      <h1>Admin View</h1>
      <p>{admin.username}</p>
      {/* View Cars */}
      <AutoTable />
    </div>
  );
};

export default AdminLayout;
