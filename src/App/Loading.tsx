import React from "react";
import { Spinner } from "reactstrap";

export const Loading: React.FC = () => {
  return (
    <div className="h-100 d-flex justify-content-center align-items-center">
      <Spinner color="primary" />
    </div>
  );
};
