import React, { Component } from "react";
import users from "../../users";
import UserItem from "./UserItem";

class Users extends Component {
  state = {
    users: users,
  };
  render() {
    return (
      <div style={userStyles}>
        {this.state.users.map((user) => (
          <div>
            <UserItem user={user} />
          </div>
        ))}
      </div>
    );
  }
}
const userStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Users;
