import React, { useState, useEffect } from 'react'
import * as CSV from 'csv-string';

import Background from '../images/doctor-background.png'
import SpecialtyCSV from '../spreadsheets/specialties.csv'
import CitiesCSV from '../spreadsheets/cities.csv'
import LanguagesCSV from '../spreadsheets/languages.csv'

const USNEWS = 'https://health.usnews.com/doctors/search?'

const getCSV = async (fileName) => {
    const response = await fetch(fileName);
    const reader = response.body.getReader();
    const result = await reader.read();
    const decoder = new TextDecoder('utf-8');
    const csv = await decoder.decode(result.value);
    return CSV.parse(csv);
}

const DoctorFinder = () => {

    const [selectedSpecialty, setSelectedSpecialty] = useState('')
    const [specialtyArray, setSpecialtyArray] = useState([])

    const [locationType, setLocationType] = useState('state/city')
    const [selectedState, setSelectedState] = useState('')
    const [selectedLocation, setSelectedLocation] = useState('')

    const [cityArray, setCityArray] = useState([])

    const [selectedGender, setSelectedGender] = useState('')
    
    const [selectedLanguage, setSelectedLanguage] = useState('')
    const [languageArray, setLanguageArray] = useState([])

    useEffect(() => {
        getCSV(SpecialtyCSV).then((result) => setSpecialtyArray(result))
        getCSV(CitiesCSV).then((result) => setCityArray(result))
        getCSV(LanguagesCSV).then((result) => setLanguageArray(result))
    }, [])

    const handleSubmit = (event) => {
        console.log(selectedSpecialty)
        console.log(locationType)
        console.log(selectedState)
        console.log(selectedLocation)
        console.log(selectedGender)
        console.log(selectedLanguage)
        window.open(
            `${USNEWS}distance=20&sort=distance${selectedSpecialty?`&specialty=${selectedSpecialty}`:''}${selectedLocation?`&location=${selectedLocation}`:''}${selectedGender?`&gender=${selectedGender}`:''}${selectedLanguage?`&language=${selectedLanguage}`:''}`,
            '_blank' // <- This is what makes it open in a new window.
          );
        event.preventDefault()
    }

    return (
        <div>
            <div className='section is-medium' style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover' }}>
                <h1 className='title is-flex is-justify-content-center has-text-centered has-text-white mx-6'>We provide a doctor finder tool in collaboration with U.S. News & World Report. We have translated this tool into Chinese and Spanish.</h1>
            </div>
            <div className='section is-flex is-justify-content-center'>
                <form onSubmit={handleSubmit}>
                    <div className='container is-flex'>
                        
                        <div className='container mx-4'>

                            {/*Specialty Section*/}
                            <div className="field">
                                <label className="label">Specialty</label>
                                <div className="control">
                                    <div className="select">
                                        <select onChange={(e) => setSelectedSpecialty(e.target.value)}>
                                            <option value=''>Select</option>
                                            {specialtyArray.map((specialty) => {
                                                return (<option key={specialty[1]} value={specialty[1]}>{specialty[0]}</option>)
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/*Language Section*/}
                            <div className="field">
                                <label className="label">Language</label>
                                <div className="control">
                                    <div className="select">
                                        <select onChange={(e) => setSelectedLanguage(e.target.value)}>
                                            <option value=''>Select</option>
                                            {languageArray.map((language) => {
                                                return (<option key={language[1]} value={language[1]}>{language[0]}</option>)
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/*Gender Section*/}
                            <div className="field">
                                <label className="label">Gender</label>
                                <div className="control">
                                    <div className="select">
                                        <select onChange={(e) => setSelectedGender(e.target.value)}>
                                            <option value=''>No Preference</option>
                                            <option value='male'>Male</option>
                                            <option value='female'>Female</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='container mx-4'>
                            {/*State/City or ZIP Section*/}
                            <div className="field">
                                <label className="label">Location Type</label>
                                <div className="control">
                                    <div className="select">
                                        <select onChange={(e) => { setLocationType(e.target.value); setSelectedLocation(''); setSelectedState('') }}>
                                            <option value='state/city'>State and City</option>
                                            <option value='zip'>Zip Code</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/*Location Section*/}
                            {
                                locationType === 'state/city' ?

                                    <div className="field">
                                        {/*State Section*/}
                                        <label className="label">State</label>
                                        <div className="control">
                                            <div className="select">
                                                <select onChange={(e) => { setSelectedState(e.target.value); setSelectedLocation(e.target.value) }}>
                                                    <option value=''>Select</option>
                                                    {states.map((state) => {
                                                        return (<option key={state} value={state}>{state}</option>)
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                        {/*City Section*/}
                                        <div className="field mt-3">
                                        <label className="label">City</label>
                                        <div className="control">
                                            <div className="select">
                                                <select disabled={selectedState === ''} onChange={(e) => setSelectedLocation(e.target.value)} style={{width: '268px'}}>
                                                    <option value=''>Select</option>
                                                    {cityArray.map((city) => {
                                                        if (city[1].includes(`%20${selectedState}`))
                                                            return (<option key={city[0]} value={city[1]}>{city[0]}</option>)
                                                    })}
                                                </select>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    // ZIP section
                                    <div className="field">
                                        <label className="label">ZIP code</label>
                                        <div className="control">
                                            <input className="input" type="text" placeholder="enter zip code" onChange={(e) => setSelectedLocation(e.target.value)} style={{width: '268px'}}/>
                                        </div>
                                    </div>
                            }

                        </div>
                    </div>
                    <div className="field is-flex is-justify-content-center mt-5">
                        <div className="control">
                            <input type="submit" value="Search" className="button is-primary"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default DoctorFinder


const states = ["AK",
    "AL",
    "AR",
    "AS",
    "AZ",
    "CA",
    "CO",
    "CT",
    "DC",
    "DE",
    "FL",
    "GA",
    "GU",
    "HI",
    "IA",
    "ID",
    "IL",
    "IN",
    "KS",
    "KY",
    "LA",
    "MA",
    "MD",
    "ME",
    "MI",
    "MN",
    "MO",
    "MS",
    "MT",
    "NC",
    "ND",
    "NE",
    "NH",
    "NJ",
    "NM",
    "NV",
    "NY",
    "OH",
    "OK",
    "OR",
    "PA",
    "PR",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VA",
    "VI",
    "VT",
    "WA",
    "WI",
    "WV",
    "WY"]