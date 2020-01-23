import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from 'styled-components'
import Header from '../components/header'
import About from '../components/About'
import Feature from '../components/feature'

const IndexPage = () => (
  <Layout>
    <Header />
    <About />
    <Feature />
  </Layout>
)

export default IndexPage
