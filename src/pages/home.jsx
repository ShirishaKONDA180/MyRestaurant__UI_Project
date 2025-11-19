import React from 'react'
import { Layout } from '../components/layout/layout'
import { Link } from 'react-router-dom'
import Banner from '../images/banner.jpeg'
import '../styles/HomeStyles.css'

export function Home(){
  return (
    <Layout>
        <div className="home" style={{backgroundImage:`url(${Banner})`}}>
          <div className="headerContainer">
            <h1>Food website</h1>
            <p>Best Food In India</p>
           <a href="/menu" ><button>Order Now</button></a>
          </div>
        </div>
    </Layout>
  )
}

export default Home
