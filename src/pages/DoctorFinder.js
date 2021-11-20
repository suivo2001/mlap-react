import React, { useState, useEffect } from 'react'
import * as CSV from 'csv-string';

import Background from '../images/doctor-background.png'
import SpecialtyCSV from '../spreadsheets/specialties.csv'
import CitiesCSV from '../spreadsheets/cities.csv'
import LanguagesCSV from '../spreadsheets/languages.csv'


const lang = require('../languages/doctor-finder.json')

const USNEWS = 'https://health.usnews.com/doctors'

const getCSV = async (fileName) => {
    const response = await fetch(fileName);
    const reader = response.body.getReader();
    const result = await reader.read();
    const decoder = new TextDecoder('utf-8');
    const csv = await decoder.decode(result.value);
    return CSV.parse(csv);
}

/* 
    Number for language:
        English: 1
        Portuguese: 2
        Spanish: 3
        French: 4
        Chinese-simp: 5
        Chinese-trad: 6
*/
const languageDict = {
    english: 1,
    portuguese: 2,
    spanish: 3,
    french: 4,
    chinese_simp: 5,
    chinese_trad: 6
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

    const [pageLanguage, setPageLanguage] = useState("english")

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
            `${USNEWS}/search?distance=20&sort=distance${selectedSpecialty ? `&specialty=${selectedSpecialty}` : ''}${selectedLocation ? `&location=${selectedLocation}` : ''}${selectedGender ? `&gender=${selectedGender}` : ''}${selectedLanguage ? `&language=${selectedLanguage}` : ''}`,
            '_blank' // <- This is what makes it open in a new window.
        );
        event.preventDefault()
    }

    return (
        <div>
            <div className='section is-medium' style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover' }}>
                <h1 className='title has-text-centered has-text-white mx-6'>We provide a doctor finder tool in collaboration with
                    <a href={USNEWS} target='_blank' rel="noreferrer"> U.S. News & World Report. </a>
                </h1>
            </div>
            <div className='section has-background-light'>
                <div className='container is-flex is-justify-content-center '>
                    <p className='content has-text-centered mx-6 my-3'>We have translated this tool into these languagues:
                        <a onClick={() => setPageLanguage("english")}> English, </a>
                        <a onClick={() => setPageLanguage("portuguese")}> Português, </a>
                        <a onClick={() => setPageLanguage("spanish")}> Español, </a>
                        <a onClick={() => setPageLanguage("french")}> Français, </a>
                        <a onClick={() => setPageLanguage("chinese_simp")}> 中文 (简体), </a>
                        and 
                        <a onClick={() => setPageLanguage("chinese_trad")}> 中文 (繁體). </a>
                    </p>
                </div>
            </div>
            <div className='container is-flex is-justify-content-center mt-6'>
                <div>
                    <p className='subtitle has-text-centered mx-6'>{lang[pageLanguage].doctor_finder}: </p>
                </div>
            </div>
            <div className='section is-flex is-justify-content-center'>

                <form onSubmit={handleSubmit}>
                    <div className='container is-flex'>

                        <div className='container mx-4'>

                            {/*Specialty Section*/}
                            <div className="field">
                                <label className="label">{lang[pageLanguage].specialty}</label>
                                <div className="control">
                                    <div className="select">
                                        <select onChange={(e) => setSelectedSpecialty(e.target.value)}>
                                            <option value=''>{lang[pageLanguage].select}</option>
                                            {specialtyArray.map((specialty) => {
                                                return (<option key={specialty[0]} value={specialty[0]}>{specialty[languageDict[pageLanguage]]}</option>)
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/*Language Section*/}
                            <div className="field">
                                <label className="label">{lang[pageLanguage].language}</label>
                                <div className="control">
                                    <div className="select">
                                        <select onChange={(e) => setSelectedLanguage(e.target.value)}>
                                            <option value=''>{lang[pageLanguage].select}</option>
                                            {languageArray.map((language) => {
                                                return (<option key={language[1]} value={language[1]}>{language[0]}</option>)
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/*Gender Section*/}
                            <div className="field">
                                <label className="label">{lang[pageLanguage].gender}</label>
                                <div className="control">
                                    <div className="select">
                                        <select onChange={(e) => setSelectedGender(e.target.value)}>
                                            <option value=''>{lang[pageLanguage].no_preference}</option>
                                            <option value='male'>{lang[pageLanguage].male}</option>
                                            <option value='female'>{lang[pageLanguage].female}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='container mx-4'>
                            {/*State/City or ZIP Section*/}
                            <div className="field">
                                <label className="label">{lang[pageLanguage].location_type}</label>
                                <div className="control">
                                    <div className="select">
                                        <select onChange={(e) => { setLocationType(e.target.value); setSelectedLocation(''); setSelectedState('') }}>
                                            <option value='state/city'>{lang[pageLanguage].state_and_city}</option>
                                            <option value='zip'>{lang[pageLanguage].zip_code}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/*Location Section*/}
                            {
                                locationType === 'state/city' ?

                                    <div className="field">
                                        {/*State Section*/}
                                        <label className="label">{lang[pageLanguage].state}</label>
                                        <div className="control">
                                            <div className="select">
                                                <select onChange={(e) => { setSelectedState(e.target.value); setSelectedLocation(e.target.value) }}>
                                                    <option value=''>{lang[pageLanguage].select}</option>
                                                    {states.map((state) => {
                                                        return (<option key={state} value={state}>{state}</option>)
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                        {/*City Section*/}
                                        <div className="field mt-3">
                                            <label className="label">{lang[pageLanguage].city}</label>
                                            <div className="control">
                                                <div className="select">
                                                    <select disabled={selectedState === ''} onChange={(e) => setSelectedLocation(e.target.value)} style={{ width: '268px' }}>
                                                        <option value=''>{lang[pageLanguage].select}</option>
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
                                        <label className="label">{lang[pageLanguage].zip_code}</label>
                                        <div className="control">
                                            <input className="input" type="text" placeholder="enter zip code" onChange={(e) => setSelectedLocation(e.target.value)} style={{ width: '268px' }} />
                                        </div>
                                    </div>
                            }

                        </div>
                    </div>
                    <div className="field is-flex is-justify-content-center mt-5">
                        <div className="control">
                            <input type="submit" value={lang[pageLanguage].search} className="button is-primary" />
                        </div>
                    </div>
                </form>
            </div>
            {
                lang[pageLanguage].translator ?

                    <div className='container is-flex is-justify-content-center mb-6'>
                        <div>
                            <p className='content has-text-centered mx-6'>{lang[pageLanguage].translator} </p>
                            <p className='content has-text-centered mx-6'>{lang[pageLanguage].reviewers} </p>
                            <p className='content has-text-centered mx-6'>{lang[pageLanguage].disclaimer} </p>
                        </div>
                    </div>

                    : ''
            }

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