import React from 'react'
import SideBar from '../../pages/sideBar/SideBar'
import Poster from '../../pages/poster/Poster'


const Hero = () => {
  return (
    <div style={{
        display: "flex", 
        flexWrap: "wrap",
        justifyContent: "space-between",
        columnGap: "20px"
        }}>
        <SideBar/>
        <Poster/>
    </div>
  )
}

export default Hero