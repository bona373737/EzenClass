import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Meta = (props) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{props.title}</title>
      </Helmet>
    </HelmetProvider>
  );
};

Meta.defaultProps = {
  title: "Arichitects",
};
export default Meta;
