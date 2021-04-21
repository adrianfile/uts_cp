import * as React from "react"
import { Helmet } from "react-helmet"
import Headers from "../components/headers"
import Features from "../components/features"
import Testimonies from "../components/testimonies"
import Promos from "../components/promos"



const IndexPage = () => (
  <>
    <Helmet>
      <title>Mooosik</title>
    </Helmet>
    <Headers />
    <Features />
    <Promos />
    <Testimonies />
  </>
)

export default IndexPage
