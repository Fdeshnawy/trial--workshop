import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }

  nav {
    background: ${({ theme }) => theme.nav};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }

  div + a {
   
    color: ${({ theme }) => theme.a};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }

  #navbarScrollingDropdown{
    color: ${({ theme }) => theme.a};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .box{
    background: ${({ theme }) => theme.body};
    transition: background 0.2s ease-in, color 0.2s ease-in;
    
  }

  .button--banner{
    background: ${({ theme }) => theme.button};
    color: ${({ theme }) => theme.body};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }

  .media-section{
    background: ${({ theme }) => theme.media};
    color: ${({ theme }) => theme.body};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
`;

export const lightTheme = {
  body: "#fff",
  text: "#121620 !important",
  nav:"#000 !important",
  a: "#fff !important",
  box:'background:linear-gradient(130deg,#fff, #fff, #fff, #fff, #fff, #fff, #fff, #fff)',
  button:'#000',
  media:' #000',

  

};

export const darkTheme = {
  body: "#000",
  text: "#f1f1f1 !important",
  nav:"#fff !important",
  a: "#000 !important",
  box:'background:linear-gradient(130deg,#000, #000, #000, #000, #000, #000, #000, #000)',
  button:'#fff',
  media:' #fff',

};
