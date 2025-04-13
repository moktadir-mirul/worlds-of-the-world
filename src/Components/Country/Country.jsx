import React, { useState } from "react";



function Country ({country, handleVisitedCountries}) {
    const [visited, setVisited] = useState(false);

    const handleVisit = (country) => {
        setVisited(!visited);
        handleVisitedCountries(country);
    }

    return (
        <div>
            <div className={`card bg-base-100 w-96 shadow-sm border border-gray-300 ${visited && 'bg-gray-300 border-2 border-rose-300'}`}>
                <figure>
                    <img
                    className="p-2 w-full h-60 object-cover"
                    src={country.flags.png}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{country.name.common}</h2>
                    <div className="text-lg">
                        <p className="text-xl"><strong>Official Name: </strong>{country.name.official}</p>
                        <p>Population: {country.population}</p>
                        <p>Region: {country.region}</p>
                        <p>Capital: {country.capital}</p>
                    </div>
                    <div className="card-actions justify-end">
                    <button className={`btn ${visited ? 'btn-secondary' : 'btn-primary'}`} onClick={() => handleVisit(country)}>
                        {
                            visited ? 'Visited' : 'Note Visited'
                        }
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Country;