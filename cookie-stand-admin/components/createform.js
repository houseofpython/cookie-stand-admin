
import React, { useState } from 'react';

//global export default stores = 0

export default function CreateForm (props) {
    console.log('location', props.location)

  return (
  <>
  <div className="flex items-center justify-center">
  <div className="m-6 bg-green-500 text-black m-20 rounded-lg w-3/4 self-center">
  <h1 className="text-3xl text-center m-2"> Create Cookie Stand </h1>
  <div className=" px-2 py-1 bg-green-500 text-black m-20 rounded-lg flex items-center justify-center">

    <form onSubmit={props.handleSubmit} className="align-content-center m-5 rounded-lg w-3/4">
      <div className="m-3 content-center bg-green-500">
        <label className="text-1xl mr-6" htmlFor="location">Location</label>
        <input className="w-3/4"
          type="text"
          name="location"
          placeholder="ex.Paris"
        />
      </div >
      <div className="w-full bg-green-200 flex justify-between rounded-md">
          <div className="m-2 bg-green-200">
            <label className="text-1xl mb-4" htmlFor="minCustomers">Min Customers per Hour:</label>
            <input
              type="number"
              name="minCustomers"
            />
          </div>
          <div className="m-2 bg-green-200">
            <label className="text-1xl mb-4" htmlFor="maxCustomers">Max Customers per Hour:</label>
            <input
              type="number"
              name="maxCustomers"
            />
          </div>
          <div className="m-2 bg-green-200">
            <label className="text-1xl mb-4" htmlFor="avgCookies">Avg Cookies per Sale:</label>
            <input
              type="number"
              name="avgCookies"
            />
          </div>
          <button className="w-4/12 m-2 bg-green-700" type="submit">Create</button>
      </div>
    </form>
   </div>
   </div>
   </div>
   </>
  );
};



