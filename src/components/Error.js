import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="pt-36 h-screen">
      <h1>Error </h1>
      <h2>{err.status}: {err.statusText}</h2>
      <h2>Something Went Wrong</h2>
    </div>
  );
};

export default Error;