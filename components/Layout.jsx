import React from 'react'
import styles from "../styles/Layout.module.css";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
               {children}
            <Footer />

        </>
    )
}

export default Layout