import { createRoot } from 'react-dom/client'
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { PrimeReactProvider } from "primereact/api";
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <PrimeReactProvider>


    <App />

  </PrimeReactProvider>
)
