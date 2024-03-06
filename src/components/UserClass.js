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
      <div className="user-card flex align-middle m-4 p-4 rounded-lg">
        <img src={avatar_url} alt="" className="user-img w-36 mr-4" />
        <div className="text-xl ml-2">
        <h2 className="mb-2">Name: {name}</h2>
        <h3 className="mb-2">Location: {location}</h3>
        <h4 className="mb-2">Contact: @{login}</h4>
        </div>
      </div>
    );
  }
}

export default UserClass;
