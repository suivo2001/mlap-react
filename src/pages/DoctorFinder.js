import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import * as CSV from 'csv-string';
import queryString from 'query-string';

import SpecialtyCSV from '../spreadsheets/specialties.csv'
import LanguagesCSV from '../spreadsheets/languages.csv'
import CityJSON from '../spreadsheets/cities.json'
import Background from '../images/doctor-background.png'

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
    chinese_trad: 6,
    persian: 7,
    vietnamese: 8,
    telugu: 9
}



const DoctorFinder = () => {

    let params = queryString.parse(window.location.search)

    const [pageLanguage, setPageLanguage] = useState(params.language || "english")

    const [selectedSpecialty, setSelectedSpecialty] = useState('')
    const [specialtyArray, setSpecialtyArray] = useState([])

    const [locationType, setLocationType] = useState('state/city')
    const [selectedLocation, setSelectedLocation] = useState('')

    const [cityArray, setCityArray] = useState([])

    const [selectedGender, setSelectedGender] = useState('')

    const [selectedLanguage, setSelectedLanguage] = useState('')
    const [languageArray, setLanguageArray] = useState([])

    

    useEffect(() => {
        getCSV(SpecialtyCSV).then((result) => setSpecialtyArray(result))
        
        setCityArray(CityJSON)
        getCSV(LanguagesCSV).then((result) => setLanguageArray(result))
        
    }, [])

    const handleSubmit = (event) => {
        window.open(
            `${USNEWS}/search?distance=20&sort=distance${selectedSpecialty ? `&specialty=${selectedSpecialty}` : ''}${selectedLocation ? `&location=${selectedLocation}` : ''}${selectedGender ? `&gender=${selectedGender}` : ''}${selectedLanguage ? `&language=${selectedLanguage}` : ''}`,
            '_blank' // <- This is what makes it open in a new window.
        );
        event.preventDefault()
    }

    return (
        <div>
            <div className='section is-medium' style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover' }}>
                <h1 className='title has-text-centered has-text-white mx-6'>Find a doctor in your area!
                </h1>
            </div>
            <div className='section has-background-light'>
                <div className='container is-flex is-justify-content-center '>
                    <p className='content has-text-centered mx-6 my-3'>We have translated this tool into eight languagues:
                        {/* eslint-disable-next-line */}
                        <a onClick={() => setPageLanguage("english")}> English, </a>
                        {/* eslint-disable-next-line */}
                        <a onClick={() => setPageLanguage("portuguese")}> Português, </a>
                        {/* eslint-disable-next-line */}
                        <a onClick={() => setPageLanguage("spanish")}> Español, </a>
                        {/* eslint-disable-next-line */}
                        <a onClick={() => setPageLanguage("french")}> Français, </a>
                        {/* eslint-disable-next-line */}
                        <a onClick={() => setPageLanguage("chinese_simp")}> 中文 (简体), </a>                  
                        {/* eslint-disable-next-line */}
                        <a onClick={() => setPageLanguage("chinese_trad")}> 中文 (繁體), </a>
                        {/* eslint-disable-next-line */}
                        <a onClick={() => setPageLanguage("persian")}> فارسی, </a>  
                        {/* eslint-disable-next-line */}
                        <a onClick={() => setPageLanguage("vietnamese")}> Tiếng Việt. </a>
                        and
                        {/* eslint-disable-next-line */}
                        <a onClick={() => setPageLanguage("telugu")}> Telugu. </a>
                    </p>
                </div>
            </div>
            <div className='container is-flex is-justify-content-center mt-6'>
                <div>
                    <p className='subtitle has-text-centered mx-6'>{lang[pageLanguage].doctor_finder}: </p>
                </div>
            </div>
            <div className='section is-flex is-justify-content-center'>

                <form onSubmit={handleSubmit} style={{ overflowX: "scroll" }}>
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
                                        <select onChange={(e) => { setLocationType(e.target.value); setSelectedLocation('') }}>
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
                                    
                                        {/*City or state Section*/}

                                        <div className="field mt-3">
                                            <label className="label">{lang[pageLanguage].state_and_city}</label>
                                            <div className="control">

                                                
                                                
                                                <Select 
                                                filterOption={
                                                    ({label}, query) => 
                                                      query.length>0 && label.toLowerCase().includes(query.toLowerCase()) 
                                                    } 
                                                options={cityArray} onChange={(e) => {setSelectedLocation(e.value)}} maxMenuHeight={135} menuPlacement="bottom" />
                                                
                                                
                                                

                                            </div>
                                        </div>
                                    </div>
                                    :
                                    // ZIP section
                                    <div className="field">
                                        <label className="label">{lang[pageLanguage].zip_code}</label>
                                        <div className="control">
                                            <input className="input" type="text" placeholder="enter zip code" onChange={(e) => setSelectedLocation(e.target.value)}/>
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

/*
getCSV(CitiesCSV).then((result) => {
            const newArray = []
            console.log(result)
            for (var i = 0; i < result.length; i++) {
                newArray.push({ value: encodeURIComponent(result[i][0]), label: result[i][0] })
            }
            console.log(newArray)
            
        })

getCSV(ZipCSV).then((result) => {
            const newObj = {}
            console.log(result)
            for (var i = 0; i < result.length; i++) {
                newObj[result[i][0]]={lat:parseFloat(result[i][1]), lng: parseFloat(result[i][2])}
            }
            console.log(newObj)
            
        })
*/