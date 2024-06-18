import { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(2);

  return (
    <div className="pt-36 h-screen user-card">
      <h2>Count: {count}</h2>
      <h2>Count2: {count2}</h2>
      <h2>Name: Animesh Singhal</h2>
      <h3>Location : Kolkata</h3>
      <h4>Contact: @singhalanimesh</h4>
    </div>
  );
};
export default User;
