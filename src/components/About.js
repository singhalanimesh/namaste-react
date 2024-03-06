import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className=" bg-[#ffffee]">
      <div className="flex ml-4">
        <h1 className="m-4 p-4 text-4xl border border-solid border-black w-[280]">
          ABOUT US
        </h1>
        <p className="mx-4 p-4 text-3xl">
          We Are a Food Delivery App, Delivering Fast and Hassle-Free With a
          Huge Selection of Restaurants to Choose From.
          Using Classes.
        </p>
      </div>
      <UserClass />
    </div>
  );
};
export default About;
