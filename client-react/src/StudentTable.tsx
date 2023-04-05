import React, {useEffect, useState} from 'react'

export default function StudentTable() {

    const [students, setStudent] = useState<any[]>([]);

    function fetchData() {
      fetch('http://localhost:3000/student')
        .then(response => response.json())
        .then(data => setStudent(data));
    }
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const handleDelete = (id: Number) => {
      fetch(`/http://localhost:3000/student/${id}`, {
        method: 'DELETE',
      })
        .then(() => {
          const updatedStudent = students.filter(students => students.id !== id);
          setStudent(updatedStudent);
        });
    }
  
    const handleUpdate = (id: Number, updatedStudent:JSON) => {
      fetch(`http://localhost:3000/student/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedStudent)
      })
      fetchData();
    }
  
    const handleCreation = (creationPackage: JSON) => {
  
      fetch(`http://localhost:3000/student`, {
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
         <div className='studentContainer'>
      <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Birth Date</th>
                <th>Country</th>
                <th>City</th>
                <th>Address</th>
                <th>Tutor Id</th>
            </tr>
        </thead>
      <tbody>
        {students.map(student => (
          
        <tr key={student.id}>

                <td className='p-2'>{student.id}</td>
                <td className='p-2'>{student.firstName}</td>
                <td className='p-2'>{student.lastName}</td>
                <td className='p-2'>{student.birthDate}</td>
                <td className='p-2'>{student.country}</td>
                <td className='p-2'>{student.city}</td>
                <td className='p-2'>{student.address}</td>
                <td className='p-2'>{student.tutorId}</td>
                

        </tr>

))}
      </tbody>
      </table>
    </div>
        </>
    )
}
