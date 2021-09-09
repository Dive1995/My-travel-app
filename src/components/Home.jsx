import React from 'react'
import '../css/home.css'

function Home() {
    return (
        <div className="home">
            <div className="content">
                <div className="header">
                    <h1>Travel the world !</h1>
                    <h2>Eat and Fun with friends</h2>
                </div>
                <div className="location">
                    <div className="search">
                        <form action="">
                            <input type="text" placeholder="Search here"/>
                            <button className="btn btn-search">Search</button>
                        </form>
                    </div>
                    <div className="current-location">
                        {/* <img src="../images/location.svg" alt="location" /> */}
                    </div>
                </div>
                <div className="filter">
                    <button className="filter-btn">Resturants</button>
                    <button className="filter-btn">Hotels</button>
                    <button className="filter-btn">Tourist Spots</button>
                </div>
            </div>
        </div>
    )
}

export default Home
