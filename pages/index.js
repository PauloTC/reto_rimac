import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import Form from '@/components/Form'
import HomeAside from '@/components/HomeAside'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.home}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
      </Head>
      <Layout>
       <HomeAside/>
        <div className={styles.leftside}>
          <Form />
        </div>
      </Layout>
    </div>
  )
}