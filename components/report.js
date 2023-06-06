import react from 'react'

export default function Report({locationsList, hours}) {
    function getStoreList(){
        if ( locationsList.length === 0){
        return (
            <p className="px-2 py-1 text-black text-center">No Cookies Stands Available</p>
           );
    }
     else {
    return <Table hours={hours} locationsList={locationsList}/>
    }
    }
    return (
        <>
            {getStoreList()}
        </>
    )
    function Table({locationsList, hours}) {
        console.log('storerender', locationsList, hours)
        return(
                 <table className="border-seperate border-black bg-green-500 text-black m-auto rounded-lg w-3/4 self-center">
                    <thead>
                    <tr>
                        {hours.map(hour =>

                             <th key={hour} className="">{hour}</th>
                )}
                        </tr>
                    </thead>
                     <tbody className="border-seperate border-black bg-green-500 text-black m-auto rounded-lg w-3/4 self-center">
                         {locationsList.map(location =>
                        <tr>
                            <td className="">{location.location}</td>
                          {location.hourly_sales.map(cookie_sales =>
                            <td className="">{cookie_sales}</td>

                            )}
                          <button className="bg-green-700" type="submit" onClick="">Delete</button>
                        </tr>
                        )}
                     </tbody>
                 </table>

        )
        }

}


