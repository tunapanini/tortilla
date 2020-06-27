import { Global, css } from "@emotion/core";
import React from "react";

const globalStyle = css`
  html {
    box-sizing: border-box;
    font-family: "Noto Sans KR", "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: inherit;
  }
  li {
    list-style: none;
  }
`;

const Globalstyle = () => {
  return <Global styles={globalStyle} />;
};

export default Globalstyle;
