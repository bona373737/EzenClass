import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Meta = (props) => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <meta name="keywords" content={props.keywords} />
        <meta name="author" content={props.author} />
        <meta name="or:type" content="website" />
        <meta name="or:title" content={props.title} />
        <meta name="or:description" content={props.description} />
        <meta name="or:url" content={props.url} />
      </Helmet>
    </HelmetProvider>
  );
};

Meta.defaultProps = {
  title: "Arichitects",
  keywords: "w3scc template clone",
  author: "bongbong",
  url: window.location.href,
};
export default Meta;
