import { useRouteError } from "react-router-dom";


const Error = () => {
  const error = useRouteError();
  console.log(error.status);
  // console.log(error.error.message);
  return (
    <div className="error">
      <h2>{error.status}</h2>
    </div>
  )
}
export default Error;
