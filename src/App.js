import { ThemeProvider } from 'styled-components';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import { darkTheme, lightTheme } from './utils/Themes';
import Navbar from './components/Navbar';
import PhotoSection from './components/PhotoSection';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';


import styled from "styled-components";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`

function App() {
  const [darkMode,setDarkMode]=useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router >
        <Navbar />
        <Body>
          <PhotoSection />
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>
          <Wrapper>
            <Education />
            <Contact />
          </Wrapper>
          <Footer />
        </Body>
      </Router>
    </ThemeProvider> 
  );
}

export default App;
