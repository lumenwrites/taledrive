import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Editor from 'components/Editor'

export default function Home() {
  return (
    <div>
      <Editor/>
    </div>
  )
}
