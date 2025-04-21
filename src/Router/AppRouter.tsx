// import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../Components/Layout/Layout'
import HomePage from '../Pages/HomePage/HomePage'
import AboutusPage from '../Pages/AboutUsPage/AboutusPage'
import ContactPage from '../Pages/ContactPage/ContactPage'
import ServicesPage from '../Pages/ServicesPage/ServicesPage'

// type Props = {}

const AppRouter = () => {
  return (
    <>
    <BrowserRouter>   
        <Routes>
            <Route element={<Layout />} >
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/aboutus" element={<AboutusPage />} />
            <Route path="/contact" element={<ContactPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default AppRouter