import React from 'react'
import Recruiters from '../Recruiters/Recruiters'
// import Header from '../Utility/Header/Header'
import StatsCard from '../Utility/StatsCard/StatsCard'
import './Placements.css'
function Placements() {
  return (
    <div className='placements' id='stats'>
        <h1>Placements Statistics</h1>
        <div className='card-container'>
            <StatsCard />
            <StatsCard />
            <StatsCard />
            <StatsCard />
        </div>
        <Recruiters />
    </div>
  )
}

export default Placements