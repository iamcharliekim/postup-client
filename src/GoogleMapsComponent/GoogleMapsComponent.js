import React from 'react';
import { withGoogleMap, GoogleMap} from "react-google-maps"

function Map(props){

    return (
        <GoogleMap zoom={props.zoom} center={{lat: 84.32, lng: 242.32}}>
        </GoogleMap>
    )
}

const GoogleMapsComponent = withGoogleMap((Map));

export default GoogleMapsComponent