import React from 'react'
import HomePageDeals from '../components/Deals/HomePageDeals'
import Navbar from '../components/Navbar/Navbar'
import BannerExample from '../components/Product/Product-carousel/CarouselComponent'
import Recommmended from '../components/Recomended/Recommmended'

const Home = () => {
  return (
    <>
      <Navbar />
      <BannerExample />
      <Recommmended />
      <HomePageDeals />
    </>
  )
}

export default Home