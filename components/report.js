import react from 'react'

export default function Report({ locationsList, hours }) {
  function getStoreList() {
    if (locationsList.length === 0) {
      return (
        <p className="px-2 py-1 text-center text-black">No Cookies Stands Available</p>
      );
    }
    else {
      return <Table hours={hours} locationsList={locationsList} />
    }
  }
  return (
    <>
      {getStoreList()}
    </>
  )
  function Table({ locationsList, hours }) {
    console.log('storerender', locationsList, hours)
    return (
      <table className="self-center w-3/4 m-auto text-black bg-green-500 border-black rounded-lg border-seperate">
        <thead>
          <tr>
            {hours.map(hour =>

              <th key={hour} className="">{hour}</th>
            )}
          </tr>
        </thead>
        <tbody className="self-center w-3/4 m-auto text-black bg-green-500 border-black rounded-lg border-seperate">
          {locationsList.map(location =>
            <tr key={location.location}>
              <td className="">{location.location}</td>
              {location.hourly_sales.map((cookie_sales, index) =>
                <td key={index} className="">{cookie_sales}</td>

              )}
              <button className="bg-green-700" type="submit" onClick="{}">Delete</button>
            </tr>
          )}
        </tbody>
      </table>

    )
  }

}


