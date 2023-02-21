import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Contact = () => {
  return (
    <Layout pageTitle="Contact me">
      <p>Contact me section</p>
    </Layout>
  )
}

export const Head = () => <Seo title="Contact" />
export default Contact
