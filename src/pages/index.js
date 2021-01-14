import React from "react"
import { Link } from "gatsby"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Layout from "../components/Layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello.</h1>
      <h2>Hello there I am Milan</h2>
      <p>
        Need a developer <Link to="/contact">contact me</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
