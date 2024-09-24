import React from 'react'
import ImageSlider from '../../components/Home/Firstpart/Firstpart'
import Secondpart from '../../components/Home/Secondpart/Secondpart'
import Thirdpart from '../../components/Home/Thirdpart/Thirdpart'
import TravelSection from '../../components/Home/Travel/Travel'
import TravelofferSection from '../../components/Home/Traveloffer/Traveloffer'
import GalleryPage from '../../components/Home/Ourtourgalery/Ourtourgalery'
import Resentpostes from '../../components/Home/Resentpostes/Resentpostes'
import Holidaypackage from '../../components/Home/Holidaypackege/Holidaypackege'
import Slideeer from '../../components/Home/Slideeer/Slideeer'

export default function HomePage() {
  return (
    <div className='-mt-36'>
        <ImageSlider />
         <Secondpart />
        <Thirdpart />
        <TravelSection/>
        <TravelofferSection/>
        <GalleryPage />
         <Resentpostes/>
        <Holidaypackage/>
        <Slideeer/>
    </div>
  )
}
