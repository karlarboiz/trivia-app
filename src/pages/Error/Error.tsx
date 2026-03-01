import React from "react";
import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";
import styles from "./Error.module.css";

const Error: React.FC = () => {
  const error = useRouteError();

  let title = "Something went wrong";
  let message = "An unexpected error has occurred.";

  if (isRouteErrorResponse(error)) {
    title = `Error ${error.status}`;
    message = error.statusText || message;
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.message}>{message}</p>

        <div className={styles.actions}>
          <Link to="/" className={styles.primaryBtn}>
            Go Home
          </Link>
          <Link to="/quiz" className={styles.secondaryBtn}>
            Try Quiz Again
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;