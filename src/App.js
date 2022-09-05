import React, { useState } from "react";
import Menu from "./components/Menu";
import styled, { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import SignIn from "./pages/SignIn";

export const Container = styled.div`
  display: flex;
`;

export const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;

export const Wrapper = styled.div`
  padding: 2.2rem 9.6rem;
`;

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <Router>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />

          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="signin" element={<SignIn></SignIn>} />
                  <Route path="video">
                    <Route path=":id" element={<Video />} />
                  </Route>
                </Route>
                {/* <Route path="/" element={<Home />} />
                <Route path="video">
                  <Route path=":id" element={<Video />} />
                </Route> */}
              </Routes>
            </Wrapper>
          </Main>
        </Router>
      </Container>
    </ThemeProvider>
  );
};

export default App;
