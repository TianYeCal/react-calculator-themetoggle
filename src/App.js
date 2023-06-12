import ThemeToggle from "./ThemeToggle";
import Screen from "./Screen";
import styled from "styled-components";
import Keyboard from "./Keyboard";
import { AppProvider } from "./context";

function App() {
  return (
    <AppProvider>
      <Wrapper>
        <ThemeToggle />
        <Screen />
        <Keyboard />
      </Wrapper>
    </AppProvider>
  );
}
const Wrapper = styled.main`
  color: white;
`;
export default App;
