import React, { use } from "react";


function Countries({countriesPromise}) {

    const allCountries = use(countriesPromise);

    return (
        <div>
            <h1 className="in text-center text-5xl text-rose-900 py-5">Total Countries: {allCountries.length}</h1>
        </div>
    )
}

export default Countries;