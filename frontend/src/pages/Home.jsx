import React from 'react'
import Hero from '../components/Hero'
import LatestCOllection from '../components/LatestCOllection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsLetterBox from '../components/NewsLetterBox'
const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCOllection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsLetterBox/>
    

    </div>
  )
}

export default Home
