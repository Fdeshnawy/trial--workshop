// import Header from "./Components/Header";

// function App() {
//   return (
//     <div>
//       <Header />
//       <h2>Let's get started!</h2>
//     </div>
//   );
// }

// export default App;

import * as React from "react";
import { lightTheme, darkTheme, GlobalStyles } from "./Components/UI/Theme";
import { ThemeProvider } from "styled-components";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import Social from "./Components/Social/Social";
import { FaRegSun } from "react-icons/fa";
import whiteLogo from "./assets/logowhite.png";
import logo from "./assets/logo.png";
import Fonts from "./Components/UI/Fonts";
import Stories from "./Components/Stories/Stories";
import Member from "./Components/Member/Member";
import Events from "./Components/Events/Events";
import Media from "./Components/Media/Media";
import News from "./Components/News/New";

export default class App extends React.Component {
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
          <Fonts/>
          <div id="target">
            {isDarkTheme ? <Header src={whiteLogo} /> : <Header src={logo} />}
            <Banner />
            <Social />
            <Stories/>
            <Member/>
            <Events/>
            <Media/>
            <News/>
            <button onClick={this.toggleTheme} className="mode--theme">
              {isDarkTheme ? (
                <span aria-label="Light mode" role="img">
                  <FaRegSun />
                </span>
              ) : (
                <span aria-label="Dark mode" role="img">
                  <FaRegSun />
                </span>
              )}
            </button>
          </div>
        </>
      </ThemeProvider>
    );
  }
}
