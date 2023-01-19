
import * as React from "react";
import { lightTheme, darkTheme, GlobalStyles } from "../UI/Theme";
import { ThemeProvider } from "styled-components";
import { FaAdjust } from "react-icons/fa";


export default class Mode extends React.Component {
  state = {
    theme: "light",
    fontAcess: "16px",
  };

  setMode = (mode) => {
    localStorage.setItem("theme", mode);
    this.setState({ theme: mode });
  };

  setFont = (fontA) => {
    localStorage.setItem("fontAcess", fontA);
    this.setState({ fontAcess: fontA });
  };

  toggleTheme = () => {
    const { theme } = this.state;
    theme === "dark" ? this.setMode("light") : this.setMode("dark");
  };

  toggleFont = () => {
    const { fontAcess } = this.state;
    fontAcess === "16px" ? this.setMode("18px") : this.setMode("16px");
  };

  componentDidMount() {
    const localTheme = localStorage.getItem("theme");
    localTheme ? this.setState({ theme: localTheme }) : this.setMode("dark");
  }

  render() {
    const { theme } = this.state;
    const isDarkTheme = theme === "dark";
    const themeMode = isDarkTheme ? darkTheme : lightTheme;

    return (
      <ThemeProvider theme={themeMode}>
        
        <GlobalStyles />
        <>
          <div id="target">
           
            <button onClick={this.toggleTheme} className="">
              {isDarkTheme ? (
                <span aria-label="Light mode" role="img">
                  <FaAdjust className="adjust"   />
                </span>
              ) : (
                <span aria-label="Dark mode" role="img">
                  <FaAdjust className="adjust"   />
                </span>
              )}
            </button>
          </div>
        </>
      </ThemeProvider>
    );
  }
}
