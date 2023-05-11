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
                 <table className="border-seperate border-black bg-blue-500">
                    <thead>
                    <tr>
                        {hours.map(hour =>

                             <th key={hour} className="">{hour}</th>
                )}
                        </tr>
                    </thead>
                     <tbody>
                         {locationsList.map(location =>
                        <tr>
                            <td className="">{location.location}</td>
                          {location.hourly_sales.map(cookie_sales =>
                            <td className="">{cookie_sales}</td>

                            )}
                        </tr>
                        )}
                     </tbody>
                 </table>

        )
        }

}


