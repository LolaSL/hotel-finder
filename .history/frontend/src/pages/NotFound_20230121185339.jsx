import React from 'react';
import { useRouteError } from "react-router-dom";
const NotFound = () => {
    const error = useRouteError();
  console.error(error);
  return (
    <div id="error-page text-center display-6 pt-4">
    <h1 className="text-danger text-uppercase pt-4 mb-6">Oops!</h1>
    <p>Sorry, an unexpected error has occurred.</p>
    <p>
      <i>{error.statusText || error.message}</i>
    </p>
  </div>
  )
}

export default NotFound;