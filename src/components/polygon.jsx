import react from "react";
import{
    GoogleMap,
    Polygon,
} from "@react-google-maps/api";

function polygono(){
    const coordinates=[{
        lat: 43.55,
        lng: -71.21,
    },
    {
        lat: 44.55,
        lng: -70.21, 
    },
    {
        lat: 45.55,
        lng: -69.21, 
    },
    {   lat: 46.55,
        lng: -68.21, 
    },
    ]
    console.log("pepeches")
 return <Polygon path={coordinates}
   
    key="cualquiercosa"
    options={{
    fillColor: "yellow",
    fillOpacity: 0.4,
    strokeColor: "#d35400",
    strokeOpacity: 0.8,
    strokeWeight: 3
}}/>

}
export default polygono