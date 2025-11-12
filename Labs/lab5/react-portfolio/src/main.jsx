import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import NotFound from './pages/NotFound.jsx'

function Layout({ children }) {
  return (
    <>
      <Header />
      <div id="main">{children}</div>
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  { path: "/", element: <Layout><Home /></Layout> },
  { path: "/about", element: <Layout><About /></Layout> },
  { path: "/projects", element: <Layout><Projects /></Layout> },
  { path: "*", element: <Layout><NotFound /></Layout> }, // 404 for unknown routes
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
