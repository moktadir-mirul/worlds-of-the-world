import React, { use } from "react";
import Country from "./Country/Country";


function Countries({countriesPromise}) {

    const allCountries = use(countriesPromise);

    return (
        <div>
            <h1 className="in text-center text-5xl text-rose-900 py-5">Total Countries: {allCountries.length}</h1>
            <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                allCountries.map(country => <Country key={country.cca3} country={country}></Country>)
            }
            </div>
        </div>
    )
}

export default Countries;