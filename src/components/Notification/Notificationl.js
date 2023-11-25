import React from "react";
import { useSelector } from "react-redux";

function Notificationl() {
  const ui = useSelector((state) => state.ui);
  return (
    <>
      {ui.isLoading && (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>Loading......</strong> You should check in on some of those
          fields below.
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}
      {ui.fullfilled && (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>Your Data sent to Store</strong> You should check in on some of those
          fields below.
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}
      {ui.rejected && (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>something went wrong</strong> You should check in on some of those
          fields below.
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}
    </>
  );
}

export default Notificationl;
