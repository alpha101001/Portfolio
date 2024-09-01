import { ThemeProvider } from "styled-components";
import { darkTheme } from "./Utils/Themes";
import Portfolio from "./Pages";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Portfolio />
    </ThemeProvider>
  );
}

export default App;
