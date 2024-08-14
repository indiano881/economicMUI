import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createTheme, ThemeProvider } from '@mui/material'
import "./global.css";

const theme= createTheme({
  
  typography: {
    h1: {
      fontSize: "3rem",
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    }
  }
});


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
