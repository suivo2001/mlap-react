import React, { useState, useEffect } from 'react'
import * as CSV from 'csv-string';

import Background from '../images/doctor-background.png'
import SpecialtyCSV from '../spreadsheets/specialties.csv'
import CitiesCSV from '../spreadsheets/cities.csv'



const getCSV = async (fileName) => {
    const response = await fetch(fileName);
    const reader = response.body.getReader();
    const result = await reader.read();
    const decoder = new TextDecoder('utf-8');
    const csv = await decoder.decode(result.value);
    return CSV.parse(csv);
}

//const specialtiesJSON = readString(specialtyString, csvConfig)

const DoctorFinder = () => {

    const [selectedSpecialty, setSelectedSpecialty] = useState('')
    const [specialtyArray, setSpecialtyArray] = useState([])

    const [locationType, setLocationType] = useState('state/city')
    const [selectedState, setSelectedState] = useState('')
    const [selectedLocation, setSelectedLocation] = useState('')

    const [cityArray, setCityArray] = useState([])

    useEffect(() => {
        getCSV(SpecialtyCSV).then((result) => setSpecialtyArray(result))
        getCSV(CitiesCSV).then((result) => setCityArray(result))
    }, [])

    const handleSubmit = (event) => {
        console.log(selectedSpecialty)
        console.log(locationType)
        console.log(selectedState)
        console.log(selectedLocation)
        event.preventDefault()
    }

    return (
        <div>
            <div className='section is-medium' style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover' }}>
                <h1 className='title is-flex is-justify-content-center has-text-centered has-text-white mx-6'>We provide a doctor finder tool in collaboration with U.S. News & World Report. We have translated this tool into Chinese and Spanish.</h1>
            </div>
            <div className='section is-flex is-justify-content-center'>
                <form onSubmit={handleSubmit}>

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
                                            <select onChange={(e) => {setSelectedState(e.target.value); setSelectedLocation(e.target.value)}}>
                                                <option value=''>Select</option>
                                                {states.map((state) => {
                                                    return (<option key={state} value={state}>{state}</option>)
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                {/*City Section*/}
                                    <label className="label">City</label>
                                    <div className="control">
                                        <div className="select">
                                            <select disabled={selectedState===''} onChange={(e) => setSelectedLocation(e.target.value)}>
                                                <option value=''>Select</option>
                                                {cityArray.map((city) => {
                                                    if (city[1].includes(`%20${selectedState}`))
                                                        return (<option key={city[0]} value={city[1]}>{city[0]}</option>)
                                                })}
                                            </select>
                                        </div>
                                    </div>
                            </div>
                            :
                            // ZIP section
                            <div className="field">
                                <label className="label">ZIP code</label>
                                <div className="control">
                                    <input className="input" type="text" placeholder="enter zip code" onChange={(e) => setSelectedLocation(e.target.value)} />
                                </div>
                            </div>
                    }


                    <div className="field">
                        <div className="control">
                            <input type="submit" value="Submit" className="button is-primary" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default DoctorFinder


const states = [ "AK",
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