import React, { useState, useEffect } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'
import { getDistance } from 'geolib'
import Geocode from "react-geocode";

// Use this website to convert chc CSV to JSON using the CSV to JSON array option
//https://www.convertcsv.com/csv-to-json.htm

import ClinicsJSON from '../spreadsheets/all_clinics.json'
import ZipDictionary from '../spreadsheets/zip.json'
import Background from '../images/doctor-background.png'

const mapKey = process.env.REACT_APP_MAP_API_KEY

Geocode.setApiKey(mapKey);
Geocode.setLanguage("en");
Geocode.setRegion("us");

const style = {

    marginLeft: "10%",

    width: '80%',
    height: '90vh',

}

const castZip = (zipCode) => {
    if (zipCode.length === 3)
        return "00" + zipCode
    else if (zipCode.length === 4)
        return "0" + zipCode
    else
        return zipCode.substring(0, 5)
}

const CareFinder = (props) => {

    const [showingInfoWindow, setShowInfoWindow] = useState(false)
    const [activeMarker, setActiveMarker] = useState({})
    const [selectedPlace, setSelectedPlace] = useState({})

    const [currentZip, setCurrentZip] = useState('')
    const [clinicsArray, setClinicsArray] = useState([])

    const [searchWithin, setSearchWithin] = useState(9000)

    const [showWarning, setShowWarning] = useState(false)

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

        if (ZipDictionary[currentZip] !== undefined) {
            let newArr = []
            ClinicsJSON.forEach((clinic) => {
                const compareZip = castZip(clinic[8])

                if (ZipDictionary[compareZip] !== undefined && getDistance(ZipDictionary[currentZip], ZipDictionary[compareZip]) < searchWithin) {
                    newArr.push(clinic)
                }
            })
            setClinicsArray(newArr)
            if (newArr.length === 0)
                setShowWarning(true)
            else
                setShowWarning(false)
        }
        else
            setShowWarning(true)

    }

    return (
        <>
            <div>
                <div className='section is-medium' style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover' }}>
                    <h1 className='title is-flex is-justify-content-center has-text-centered has-text-white mx-6'>Find a nearby affordable clinic!</h1>
                </div>

                <div className='section has-background-light'>
                    <div className='container is-flex is-justify-content-center'>
                        <div>
                            <p className='content has-text-centered mx-6'>With this tool, you can find 16,357 federally-qualified health centers and 235 federally-registered free clinics. Additional <a href="CareFinderData">data documentation</a> is published online; data is available upon request.</p>
                        </div>
                    </div>
                </div>
                {showWarning ?
                    <div className='section is-flex is-justify-content-center has-background-warning'>
                        <h1 className='content is-flex is-justify-content-center has-text-centered mx-6'>The zip code you entered may not be valid or there may not be a clinic close enough to your location. Try expanding your search area or enter a new zip code.</h1>
                    </div>
                    : ''
                }


                <div className='section is-flex is-justify-content-center'>
                    <div className='control'>
                        <label className="label">Zip Code</label>
                        <input className="input" type="text" placeholder="ZIP Code" onChange={(e) => setCurrentZip(e.target.value)} />
                        <label className="label mt-2">Search within</label>
                        <div class="select">
                            <select onChange={(e) => setSearchWithin(e.target.value)}>
                                <option value={9000}>5 miles</option>
                                <option value={15 * 1600}>15 miles</option>
                                <option value={25 * 1600}>25 miles</option>
                                <option value={50 * 1600}>50 miles</option>
                            </select>
                        </div>
                        {/* eslint-disable-next-line */}
                        <a className="button is-primary ml-3" onClick={handleSubmit}>Search</a>
                    </div>

                </div>
                <Map google={window.google} style={style} zoom={clinicsArray.length > 0 ? 10 : 4} onClick={onMapClicked}
                    initialCenter={{
                        lat: 37.09,
                        lng: -88.081807
                    }}
                    center={
                        clinicsArray.length === 0 ? undefined : { lat: clinicsArray[0][9], lng: clinicsArray[0][10] }
                    }>
                    {clinicsArray.map((clinic, index) => {
                        return (<Marker onClick={onMarkerClick}
                            key={index}
                            name={clinic[0]}
                            address={clinic[1]}
                            website={clinic[2]}
                            phone={clinic[3]}
                            email={clinic[4]}
                            type={clinic[5]}
                            position={{ lat: clinic[9], lng: clinic[10] }} />)
                    })}

                    <InfoWindow
                        marker={activeMarker}
                        visible={showingInfoWindow}>
                        <div>
                            <h1><b>{selectedPlace.name}</b></h1>
                            <h2>{selectedPlace.type}</h2>
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
        </>
    )
}

export default GoogleApiWrapper({
    apiKey: (mapKey)
})(CareFinder)


