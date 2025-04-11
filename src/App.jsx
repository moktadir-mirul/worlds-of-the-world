
import { Suspense } from 'react';
import './App.css'
import Countries from './Components/Countries';


function App() {
  
  const countriesPromise = fetch('https://restcountries.com/v3.1/all').then(res => res.json());

  return (
    <div>
      <Suspense fallback={<h1>Countries are loading . . . . . </h1>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </div>
  )
}

export default App
