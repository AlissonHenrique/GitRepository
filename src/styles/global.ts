import { createGlobalStyle } from "styled-components";
import githubBg from "../assets/images/bg.svg";

export default createGlobalStyle`

*{
  margin:0;
    padding:0;
    box-sizing:border-box;
    outline:none;
  }
  body{
    background:#f0f0f5 url(${githubBg}) no-repeat 70% top;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }
  body,input,button{
    font:16px Roboto,sans-serif

  }

  #root{
    max-width:960px;
    margin:0 auto;
    padding:40px 20px;
  }
  button{
    cursor: pointer;
  }
`;
