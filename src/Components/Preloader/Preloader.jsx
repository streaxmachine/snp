import React from "react";

export const Preloader = (props) => {
  const { loading } = props;

  return (
    <>
      {loading ? (
        <div className="loader-container-starter">
          <div className="spinner"></div>
          <div className="loader-text">SNP OFFICE IS LOADING...</div>
        </div>
      ) : null}
    </>
  );
};
