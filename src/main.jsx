import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AnimeInputPage from './page/AnimeInputPage.jsx'
import theme from './theme.jsx'
import { ThemeProvider } from '@emotion/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <AnimeInputPage />
    </ThemeProvider>
  </StrictMode>,
)
