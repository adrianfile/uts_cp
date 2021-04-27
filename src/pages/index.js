import * as React from "react"
import { Helmet } from "react-helmet"
import Headers from "../components/headers"
import Features from "../components/features"
import Testimonies from "../components/testimonies"
import Promos from "../components/promos"
import ButtonTop from "../components/button"
import Footers from "../components/footers"




const IndexPage = () => (
  <>
    <Helmet>
      <title>Mooosik</title>
    </Helmet>
    <ButtonTop />
    <Headers />
    <Features />
    <Promos />
    <Testimonies />
    <Footers />
    <FootersCopyright />
  </>
)

export default IndexPage
