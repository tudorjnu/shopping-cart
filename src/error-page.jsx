import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  console.error(error);
  <div>
    <h1>Oups!</h1>
    <p>Sorry, an unexpected error has occured!</p>
    <p>
      <i>{error.statusText || error.message}</i>
    </p>
  </div>;
};

export default ErrorPage;
