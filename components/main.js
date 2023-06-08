import react from 'react'
import CreateForm from './createform.js';
import Report from './report.js'
import React, { useState } from 'react';
import useResource from "@/hooks/useResource";
import { useAuth } from '../contexts/auth.js'

export default function Main() {
  const { createResource } = useResource();

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

  const { user } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReport = {
      location: e.target.location.value,
      minimum_customers_per_hour: parseInt(e.target.minCustomers.value),
      maximum_customers_per_hour: parseInt(e.target.maxCustomers.value),
      average_cookies_per_sale: parseFloat(e.target.avgCookies.value),
      owner: user.id,
    };
    createResource(newReport);
    setLocation([...locationsList, newReport])
  }

    

  return (
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

