import React from "react"
import MapLogo from "../images/map-logo.png"

export default function Page(props){
    return(
        <div>
            <div className="page">
                <img src={props.item.imageUrl} alt="place-picture" className="page-place-image" />
                <div className="page-contents">
                    <div className="page-contents-location-div">
                        <img src={MapLogo} alt="map-logo" className="location-div-map-logo" />
                        <p className="location-div-country">{props.item.location}</p>
                        <a href={props.item.googleMapsUrl} target="_blank" className="location-div-google-maps-link">View on Google Maps</a>
                    </div>
                    <h2 className="page-title">{props.item.title}</h2>
                    <h5 className="page-date">{props.item.startDate} - {props.item.endDate}</h5>
                    <p className="page-description">{props.item.description}</p>
                </div>
            </div>
            <br></br>
            <hr></hr>
        </div>
    )
}