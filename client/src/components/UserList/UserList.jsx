import User from "../User/User";
import chats from "../../DB";

export default function UserList({ users }) {
  //TODO onClick -> changeId in Context => change WindowChat

  return (
    <div>
      {users.map((e, i) => (
        <User key={i} name={e} />
      ))}
    </div>
  );
}
