import React from "react"
import { Link } from "gatsby"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Layout from "../components/Layout"

function about() {
  return (
    <Layout>
      About us <Link to="/contact">Contact</Link>
    </Layout>
  )
}

export default about
