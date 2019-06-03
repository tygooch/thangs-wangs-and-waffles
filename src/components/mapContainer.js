import React, { Component } from "react"
import { GoogleMap, LoadScript, Marker, Size } from "@react-google-maps/api"
import mapPin from "../images/mapPin2.svg"

const mapStyles = [
  {
    featureType: "administrative.land_parcel",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.business",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.medical",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.school",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.sports_complex",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
]

const mapIcon = () => <img src={mapPin} style={{ height: "100px" }} />

const center = {
  lat: 35.9132,
  lng: -79.055847,
}

const options = {
  disableDefaultUI: true,
}

const MARKER_POSITION = {
  lat: 35.9132,
  lng: -79.055847,
}

class MapContainer extends React.Component {
  render() {
    return (
      <LoadScript
        id="script-loader"
        googleMapsApiKey={process.env.GATSBY_GOOGLE_KEY}
      >
        <GoogleMap
          id="example-map"
          center={center}
          zoom={16}
          mapContainerStyle={{ width: "100%", height: "400px" }}
          options={{ styles: mapStyles, options: options }}
        >
          <Marker position={MARKER_POSITION} icon={mapPin} />
        </GoogleMap>
      </LoadScript>
    )
  }
}

export default MapContainer
