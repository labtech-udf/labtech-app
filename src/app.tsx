import React from "react";
import { PrimeReactProvider } from "primereact/api";
import Tailwind from 'primereact/passthrough/tailwind';
// import { AuthProvider } from "@contexts/AuthContext";
import { Router } from "@router/index";
import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
// import 'primeflex/primeflex.css'; // flex

import "./styles/global.css";

export function App() {
  return (
    <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
      {/* <AuthProvider> */}
        <Router />
      {/* </AuthProvider> */}
    </PrimeReactProvider>
  );
}
