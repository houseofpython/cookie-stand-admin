import react from 'react'
import CreateForm from './createform.js';
import Report from './report.js'
import React, { useState } from 'react';

export default function Main() {

  const [locationsList, setLocation] = useState([]);
  const hours = [
    'Locations',
    '6am',
    '7am',
    '8am',
    '9am',
    '10am',
    '11am',
    '12am',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm',
    '6pm',
    '7pm',
    ]
    const handleSubmit = (e) => {
    e.preventDefault();

    const newReport = {
      location : e.target.location.value,
      minCustomers : e.target.minCustomers.value,
      maxCustomers : e.target.maxCustomers.value,
      avgCookies: e.target.avgCookies.value,
      hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36],
    };


    setLocation([...locationsList, newReport])
  };
    console.log('stores', locationsList)

    return(
        <>
            <CreateForm
            locationsList={locationsList}
            handleSubmit={handleSubmit}
            />
            <Report
            locationsList={locationsList}
            hours={hours}
            />
        </>
   )
}

