import React, { use } from "react";


function Countries({countriesPromise}) {

    const allCountries = use(countriesPromise);

    return (
        <h1>Total Countries: {allCountries.length}</h1>
    )
}

export default Countries;