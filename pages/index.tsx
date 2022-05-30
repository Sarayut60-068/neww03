import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";

const Home: NextPage = () => {
  return (
    
      <>
        <div>
          <div>
            <Link href="/marketdiff">Market Diff</Link>
          </div>
          <div>
            <Link href="/chart">Chart</Link>
          </div>
          <div>
            <Link href="/trade">Trade</Link>
          </div>
        </div>
      </>
  )
  
  
}

export default Home
