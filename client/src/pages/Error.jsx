import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import img from "../assets/images/not-found.svg";

const Error = () => {
  const error = useRouteError();
  console.log(error);

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h1>Fuck!</h1>
          <h3>{error.data}</h3>
          <p></p>
          <Link to="/dashboard">back home</Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div>
        <h3>something went wrong, very wrong</h3>
      </div>
    </Wrapper>
  );
};
export default Error;
