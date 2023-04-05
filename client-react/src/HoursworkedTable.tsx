import React, {useEffect, useState} from 'react'

export default function HoursworkedTable() {

    const [hoursworked, setHoursworked] = useState<any[]>([]);

    function fetchData() {
      fetch('http://localhost:3000/hoursworked')
        .then(response => response.json())
        .then(data => setHoursworked(data));
    }
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const handleDelete = (id: Number) => {
      fetch(`/http://localhost:3000/hoursworked/${id}`, {
        method: 'DELETE',
      })
        .then(() => {
          const updatedHoursworked = hoursworked.filter(hoursworked => hoursworked.id !== id);
          setHoursworked(updatedHoursworked);
        });
    }
  
    const handleUpdate = (id: Number, hoursworked:JSON) => {
      fetch(`http://localhost:3000/hoursworked/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(hoursworked)
      })
      fetchData();
    }
  
    const handleCreation = (creationPackage: JSON) => {
  
      fetch(`http://localhost:3000/hoursworked`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(creationPackage)
      })
      fetchData();
    }
    return (
        <>
         <div className='hoursworkedContainer'>
      <table>
        <thead>
            <tr>
              <th>ID</th>
              <th>Teacher ID</th>
              <th>Student ID</th>
              <th>Hours - January</th>
              <th>Hours - February</th>
              <th>Hours - March</th>
              <th>Hours - April</th>
              <th>Hours - May</th>
              <th>Hours - June</th>
              <th>Hours - July</th>
              <th>Hours - August</th>
              <th>Hours - September</th>
              <th>Hours - October</th>
              <th>Hours - November</th>
              <th>Hours - December</th>
            </tr>
        </thead>
      <tbody>
        {hoursworked.map(hoursworked => (
          
        <tr key={hoursworked.id}>

          <td className='p-2'>{hoursworked.teacherId}</td>
          <td className='p-2'>{hoursworked.studentId}</td>
          <td className='p-2'>{hoursworked.hoursJanuary}</td>
          <td className='p-2'>{hoursworked.hoursFebruary}</td>
          <td className='p-2'>{hoursworked.hoursMarch}</td>
          <td className='p-2'>{hoursworked.hoursApril}</td>
          <td className='p-2'>{hoursworked.hoursMay}</td>
          <td className='p-2'>{hoursworked.hoursJune}</td>
          <td className='p-2'>{hoursworked.hoursJuly}</td>
          <td className='p-2'>{hoursworked.hoursAugust}</td>
          <td className='p-2'>{hoursworked.hoursSeptember}</td>
          <td className='p-2'>{hoursworked.hoursOctober}</td>
          <td className='p-2'>{hoursworked.hoursNovember}</td>
          <td className='p-2'>{hoursworked.hoursDecember}</td>
                
        </tr>

))}
      </tbody>
      </table>
    </div>
        </>
    )
}
