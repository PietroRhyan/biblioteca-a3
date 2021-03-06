import { Routes, Route, Navigate } from 'react-router-dom'

import { AboutUs } from "../pages/AboutUs";
import { BooksCatalog } from "../pages/BooksCatalog";
import { BooksRegistration } from "../pages/BooksRegistration";
import { Home } from "../pages/Home";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

import { isAuthenticated } from '../auth';

const user = isAuthenticated()

const PrivateRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to={'/'} replace/>
  }

  return children
}

export function PageRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/catalogo" element={<BooksCatalog />} />
      <Route 
        path="/cadastro-de-livros" 
        element={
          <PrivateRoute user={user}>
            <BooksRegistration />
          </PrivateRoute>} 
      />
      <Route path="/sobre" element={<AboutUs />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
    </Routes>
  )
}