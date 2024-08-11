import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showFilteredUsers = searchParams.get("filter") === "active";

  return (
    <div>
      <h3>User 1</h3>
      <h3>User 2</h3>
      <h3>User 3</h3>
      <Outlet />
      <div>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Active Users
        </button>
        <button onClick={() => setSearchParams({})}>Reset Fitler</button>
      </div>
      <div>
        {showFilteredUsers ? (
          <h2>Showing active users</h2>
        ) : (
          <h2>Showing all users</h2>
        )}
      </div>
    </div>
  );
};

export default Users;
