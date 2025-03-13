import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import './index.css'
import AnimeInputPage from './page/AnimeInputPage.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import theme from './theme.jsx'
import { ThemeProvider } from '@emotion/react'

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="recommendation">
            <Route path="anime" element={<AnimeInputPage/>}/>
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);