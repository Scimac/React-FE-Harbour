import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../features/users/usersSlicer";

const UserComponent = () => {
  const dispatch = useDispatch();
  const usersState = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    console.log(usersState);
  }, [usersState]);

  return (
    <div>
      <h2>List of Users</h2>

      {usersState?.loading && <h3>Loading ...</h3>}
      {!usersState?.loading && usersState?.error?.length > 0 && <h3>{usersState.error}</h3>}
      {!usersState?.loading && usersState?.users?.length > 0 && (
        <ul>
          {usersState?.users.map((user) => {
            return <li key={user.id}>{user.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default UserComponent;
