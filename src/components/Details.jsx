import React from 'react'
import '../css/details.css'

function Details() {
    return (
        <div className="details">
            <div className="details-list">
                <h2>Resturants in Colombo</h2>
                <ul className="ratings">
                    <li><button className="btn-star">1</button></li>
                    <li><button className="btn-star">2</button></li>
                    <li><button className="btn-star">3</button></li>
                    <li><button className="btn-star">4</button></li>
                </ul>
                <div className="cards">
                    <div className="card">
                        <div className="card-img">
                            <img src="https://youmatter.world/app/uploads/sites/2/2019/11/travel-world.jpg" alt="" />
                        </div>
                        <div className="card-detail">
                            <h4>Rolls Roys Colombo</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="map-container">
                <div className="map">
                    sdf
                </div>
            </div>
        </div>
    )
}

export default Details
