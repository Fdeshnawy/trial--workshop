import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  text: "#000000 !important",
  button: "#ffffff",
  border: "#e0e0e0",
  nav: "#000 !important",
  a: "#fff !important"
};

export const darkTheme = {
  body: "#000",
  text: "#ffffff !important",
  button: "#232323",
  border: "#404040",
  nav: "#fff !important",
  a: "#000 !imporant"
};

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.4s ease;
  }
  nav {
    background: ${({ theme }) => theme.nav};
    color: ${({ theme }) => theme.text};
    transition: all 0.4s ease;
  }
 nav div + a {
    color: ${({ theme }) => theme.a};
    transition: all 0.4s ease;
  }
  header button {
    background: ${({ theme }) => theme.button};
    color: ${({ theme }) => theme.text};
    border: 1px solid ${({ theme }) => theme.button};
    transition: all 0.4s ease;
  }
  header button:hover{
    border: 1px solid ${({ theme }) => theme.border};
    transition: all 0.4s ease;
  }

`;
