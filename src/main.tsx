import { createRoot } from 'react-dom/client'
import './index.css'
import "primereact/resources/themes/lara-light-cyan/theme.css";

import { PrimeReactProvider } from "primereact/api";
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <PrimeReactProvider>


    <App />

  </PrimeReactProvider>
)
