import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Meta = (props) => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="uft-8" />
        <title>{props.title}</title>
        <meta name="keywords" content={props.kewords} />
      </Helmet>
    </HelmetProvider>
  );
};

Meta.defaultProps = {
  title: "Gurmet au Catering",
  keywords: "React",
};

export default Meta;
