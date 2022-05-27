import { BrowserRouter, Route, Routes} from "react-router-dom";

import { AboutUs } from "./pages/AboutUs";
import { BooksCatalog } from "./pages/BooksCatalog";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route path="/catalogo" element={ <BooksCatalog /> } />
        <Route path="/sobre" element={ <AboutUs /> } />
        <Route path="/signIn" element={ <SignIn /> } />
        <Route path="/signUp" element={ <SignUp /> } />
      </Routes>
    </BrowserRouter>
  )
}

