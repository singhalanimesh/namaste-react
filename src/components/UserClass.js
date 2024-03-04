import React from "react";

class UserClass extends React.Component {
  constructor() {
    super();

    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
        login: "",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/singhalanimesh");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, login, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} alt="" className="user-img" />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @{login}</h4>
      </div>
    );
  }
}

export default UserClass;
