import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Layout from "components/Layout"
import Subnav from "components/Editor/Subnav"
import Editor from 'components/Editor/Editor'

export default function Home() {
  return (
    <Layout subnav={<Subnav />}>
      <Editor />
    </Layout>
  )
}

