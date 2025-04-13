import React, { use, useState } from "react";
import Country from "./Country/Country";


function Countries({countriesPromise}) {
    const [visitedCountries, setVisitedCountries]= useState([]);

    const handleVisitedCountries = (cntry) => {
        const visitedArray = visitedCountries.filter(item => item.id !== cntry.id) ;
        
        setVisitedCountries([...visitedCountries, visitedArray])
    } 

    const allCountries = use(countriesPromise);

    return (
        <div>
            <h1 className="in text-center text-5xl text-rose-900 py-5">Total Countries: {allCountries.length}</h1>
            <h1 className="in text-center py-5 text-3xl text-amber-700">Travelled So far: {visitedCountries.length}</h1>
            <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                allCountries.map(country => <Country key={country.cca3} country={country} handleVisitedCountries={handleVisitedCountries}></Country>)
            }
            </div>
        </div>
    )
}

export default Countries;