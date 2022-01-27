import React, { useState, useEffect } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'
import {getDistance} from 'geolib'
import Geocode from "react-geocode";

import ClinicsJSON from '../spreadsheets/clinics.json'
import ZipDictionary from '../spreadsheets/zip.json'

const mapKey = process.env.REACT_APP_MAP_API_KEY

Geocode.setApiKey(mapKey);
Geocode.setLanguage("en");
Geocode.setRegion("us");

function timeout(delay) {
    return new Promise(res => setTimeout(res, delay));
}

const style = {

    marginLeft: "10%",
    paddingBottom: "200px",
    width: '80%',
    height: '80%',
}

const castZip = (zipCode) => {
    if (zipCode.length===3)
        return "00"+zipCode
    else if (zipCode.length===4)
        return "0"+zipCode
    else
        return zipCode.substring(0, 5)
}

const ClinicFinder = (props) => {

    const [showingInfoWindow, setShowInfoWindow] = useState(false)
    const [activeMarker, setActiveMarker] = useState({})
    const [selectedPlace, setSelectedPlace] = useState({})

    const [currentZip, setCurrentZip] = useState('')
    const [clinicsArray, setClinicsArray] = useState([])

    const searchWithin = 10000

    useEffect(() => {
        console.log(ClinicsJSON)
    }, [])

    const onMarkerClick = (props, marker, e) => {
        console.log(props)
        setSelectedPlace(props)
        setActiveMarker(marker)
        setShowInfoWindow(true)
    }

    const onMapClicked = (props) => {
        if (showingInfoWindow) {
            setShowInfoWindow(false)
            setActiveMarker(null)
        }
    };

    const handleSubmit = async () => {

        if (ZipDictionary[currentZip]!==undefined) {
            let newArr = []
            ClinicsJSON.forEach((clinic) => {
                const compareZip = castZip(clinic[8])
                
                if (ZipDictionary[compareZip]!==undefined && getDistance(ZipDictionary[currentZip], ZipDictionary[compareZip])<searchWithin) {
                    Geocode.fromAddress(clinic[1]).then(
                        (response) => {
                            const position = response.results[0].geometry.location;
                            clinic.push(position)

                        },
                        (error) => {
                            console.error(error);
                        }
                    );
                    newArr.push(clinic)
                }
            })
            await timeout(1000)
            setClinicsArray(newArr)
        }

    }

    return (
        <div>
            <div className='section' id="grad">
                <h1 className='title is-flex is-justify-content-center has-text-centered has-text-white mx-6'>Find a nearby clinic with your Zip Code!</h1>
            </div>

            <div className='section is-flex is-justify-content-center'>
                <div className='control'>
                    <label className="label">Zip Code</label>
                    <input className="input" type="text" placeholder="ZIP Code" onChange={(e) => setCurrentZip(e.target.value)} />
                    {/* eslint-disable-next-line */}
                    <a className="button is-primary mt-3" onClick={handleSubmit}>Search</a>
                </div>
            
            </div>
            <Map google={window.google} style={style} zoom={clinicsArray.length > 0 ? 11 : 4} onClick={onMapClicked}
                initialCenter={{
                    lat: 37.09,
                    lng: -88.081807
                }}
                center={
                    clinicsArray.length === 0 ? undefined : clinicsArray[0][clinicsArray[0].length - 1]
                }>
                {clinicsArray.map((clinic, index) => {
                    return (<Marker onClick={onMarkerClick}
                        key={index}
                        name={clinic[0]}
                        address={clinic[1]}
                        website = {clinic[2]}
                        phone = {clinic[3]}
                        email = {clinic[4]}
                        position={clinic[clinic.length - 1]} />)
                })}

                <InfoWindow
                    marker={activeMarker}
                    visible={showingInfoWindow}>
                    <div>
                        <h1><b>{selectedPlace.name}</b></h1>
                        <br></br>
                        <h2>{selectedPlace.address}</h2>
                        <h2>{selectedPlace.website}</h2>
                        <h2>{selectedPlace.phone}</h2>
                        <h2>{selectedPlace.email}</h2>
                        <a target="_blank" rel="noopener noreferrer" href={`https://maps.google.com/?daddr=${selectedPlace.address}`}>Directions</a>
                    </div>
                </InfoWindow>
            </Map>
        </div>
    )
}

export default GoogleApiWrapper({
    apiKey: (mapKey)
})(ClinicFinder)


