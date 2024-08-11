import React from "react";
import { Outlet, Link } from "react-router-dom";

const Users = () => {
  return (
    <div>
      <Link>User 1</Link>
      <Link>User 2</Link>
      <Link>User 3</Link>
      <Outlet />
    </div>
  );
};

export default Users;
