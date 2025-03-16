import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import './index.css'
import InputPage from './page/InputPage.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import theme from './theme.jsx'
import { ThemeProvider } from '@emotion/react'
import Home from './page/Home.jsx';
import NavBar from './components/navbar/NavBar.jsx';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="recommendation">
            <Route path="anime" element={<InputPage inputType={"ANIME"} suggestionType={"ANIME"}/>}/>
            <Route path="manga" element={<InputPage inputType={"MANGA"} suggestionType={"MANGA"}/>}/>
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);