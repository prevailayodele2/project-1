import React from 'react'
import Index from '../components/FirstPage';
import Navbar from '../components/Navbar/Navbar'
import ProductHome from '../components/Product/ProductHome';

export const Home = () => {
  return (
    <>
      <Navbar />
      <Index />
      <ProductHome/>
    </>
  )
}
