import React from 'react'
import Hero from '../components/Hero'
import FeatureDestination from '../components/FeatureDestination'
import ExclusiveOffers from '../components/ExclusiveOffers'
import Testimonial from '../components/testimonial'
import Newsletter from '../components/newsletter'

const Home = () => {
  return (
    <>
        <Hero />
        <FeatureDestination />
        <ExclusiveOffers />
        <Testimonial />
        <Newsletter />
    </>
  )
}

export default Home