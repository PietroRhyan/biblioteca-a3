import { Route, Routes } from "react-router-dom";

import { AboutUs } from "./pages/AboutUs";
import { BooksCatalog } from "./pages/BooksCatalog";
import { Home } from "./pages/Home";

export function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/catalogo" element={ <BooksCatalog /> } exact/>
      <Route path="/sobre" element={ <AboutUs /> } exact/>
    </Routes>
  )
}

