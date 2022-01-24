import { useEffect } from "react";

export const UserList = ({ users, getUsers }) => {
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  if (users.length === 0) {
    return <p>유저 정보 없음</p>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.login}</li>
      ))}
    </ul>
  );
};
