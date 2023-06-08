
import React from 'react';
import useResource from "@/hooks/useResource";

export default function Report({ locationsList, hours }) {
  const { createResource, resources, deleteResource } = useResource();




  function getStoreList() {
    if (locationsList.length === 0) {
      return (
        <p className="px-2 py-1 text-black text-center">No Cookies Stands Available</p>
      );
    } else {
      return <Table hours={hours} locationsList={locationsList} />;
    }
  }

  function handleDelete(id) {
    console.log('id',id)
    deleteResource(id);
  }

  function Table({ locationsList, hours }) {
    console.log('location loc',location.location)
    console.log('location',location)
    console.log('locationList',locationsList)
    console.log('backend data', resources)
    return (
      <table className="self-center w-3/4 m-auto text-black bg-green-500 border-black rounded-lg border-separate">
        <thead>
          <tr>
            {hours.map((hour) => (
              <th key={hour} className="">
                {hour}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="self-center w-3/4 m-auto text-black bg-green-500 border-black rounded-lg border-separate">
          {locationsList.map((location) => (
            <tr key={location.id}>
              <td className="">{location.location}</td>
              {location.hourly_sales.map((cookie_sales, index) => (
                <td key={index} className="">
                  {cookie_sales}
                </td>
              ))}
              <td>
                <button
                  className="bg-green-700"
                  type="submit"
                  onClick={() => handleDelete(resources)}
                >Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return <>{getStoreList()}</>;
}




