import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * {
    margin: 0px;
    border: none;
    outline: none;
    padding: 0px; 
    box-sizing: border-box;
    font-family: Open Sans;
 }

 ul{
   list-style: none;
 }

 body{
  overflow-x: hidden !important;
 }
`;
