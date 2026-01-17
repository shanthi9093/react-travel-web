import React from "react";
import destinationCSS from './../Destinations/Destination.module.css'
import Destination01 from './../../assets/Destination01.jpg'
import Destination02 from './../../assets/Destination02.jpg'
import Destination03 from './../../assets/Destination03.jpg'
import Destination04 from './../../assets/Destination04.jpg'
import Destination05 from './../../assets/Destination05.jpg'



function Destination() {
    return(
        <div className={`${destinationCSS.destinationWrapper} section`}id="destination">
            <div className="Section_heading">
                <div>
                    <h2>Popular Destinations</h2>
                <p>Lorem, ipsum dolor sit amet.</p>
                </div>
                <button><small>View All Destinations</small> <i className="ri-arrow-right-up-line"></i></button>

            </div>
            <div className={destinationCSS.DestinationCards}>
                 <div className={destinationCSS.DestinationCard}>
                    <img src={Destination01} alt="" />

                    <div className={destinationCSS.Content}>
                        <h2>San Francisco</h2>

                        <button>Discover</button>
                    </div>
                
                 </div>

                 <div className={destinationCSS.DestinationCard}>
                    <img src={Destination02} alt="" />

                    <div className={destinationCSS.Content}>
                        <h2>London</h2>

                        <button>Discover</button>
                    </div>
                
                 </div>

                 <div className={destinationCSS.DestinationCard}>
                    <img src={Destination03} alt="" />

                    <div className={destinationCSS.Content}>
                        <h2>Sydney</h2>

                        <button>Discover</button>
                    </div>
                
                 </div>

                 <div className={destinationCSS.DestinationCard}>
                    <img src={Destination04} alt="" />

                    <div className={destinationCSS.Content}>
                        <h2>Barclona</h2>

                        <button>Discover</button>
                    </div>
                
                 </div>

                 <div className={destinationCSS.DestinationCard}>
                    <img src={Destination05} alt="" />

                    <div className={destinationCSS.Content}>
                        <h2>Rome</h2>

                        <button>Discover</button>
                    </div>
                
                 </div>

            </div>
        </div>
    )
}
export default Destination