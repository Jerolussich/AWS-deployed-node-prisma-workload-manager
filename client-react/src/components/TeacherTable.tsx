import React, {useEffect, useState} from 'react'

export default function TeacherTable() {

    const [teachers, setTeacher] = useState<any[]>([]);

    function fetchData() {
      fetch('http://localhost:3000/teacher')
        .then(response => response.json())
        .then(data => setTeacher(data));
    }
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const handleDelete = (id: Number) => {
      fetch(`/http://localhost:3000/teacher/${id}`, {
        method: 'DELETE',
      })
        .then(() => {
          const updatedTeacher = teachers.filter(teachers => teachers.id !== id);
          setTeacher(updatedTeacher);
        });
    }
  
    const handleUpdate = (id: Number, updatedTeacher:JSON) => {
      fetch(`http://localhost:3000/teacher/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedTeacher)
      })
      fetchData();
    }
  
    const handleCreation = (creationPackage: JSON) => {
  
      fetch(`http://localhost:3000/teacher`, {
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
         <div className='teacherContainer'>
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
        {teachers.map(teacher => (
          
        <tr key={teacher.id}>

                <td className='p-2'>{teacher.id}</td>
                <td className='p-2'>{teacher.firstName}</td>
                <td className='p-2'>{teacher.lastName}</td>
                <td className='p-2'>{teacher.email}</td>
                <td className='p-2'>{teacher.birthDate}</td>
                <td className='p-2'>{teacher.country}</td>
                <td className='p-2'>{teacher.city}</td>
                <td className='p-2'>{teacher.address}</td>
                <td className='p-2'>{teacher.address}</td>
                <td className='p-2'>{teacher.joinedCompany}</td>
                <td className='p-2'>{teacher.leftCompany}</td>
                

        </tr>

))}
      </tbody>
      </table>
    </div>
        </>
    )
}
