import React, { useState } from "react";
import Menu from "./components/Menu";
import styled, { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";

export const Container = styled.div`
  display: flex;
`;

export const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;

export const Wrapper = styled.div``;

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main>
          <Navbar />
          <Wrapper>video cart</Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
};

export default App;
