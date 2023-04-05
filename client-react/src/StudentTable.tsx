import React, {useEffect, useState} from 'react'

export default function StudentTable() {

    const [student, setStudent] = useState<any[]>([]);

    function fetchData() {
      fetch('/student')
        .then(response => response.json())
        .then(data => setStudent(data));
    }
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const handleDelete = (id: Number) => {
      fetch(`/student/${id}`, {
        method: 'DELETE',
      })
        .then(() => {
          const updatedStudent = student.filter(task => task.id !== id);
          setStudent(updatedStudent);
        });
    }
  
    const handleUpdate = (id: Number, updatedStudent:JSON) => {
      fetch(`/student/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedStudent)
      })
      fetchData();
    }
  
    const handleCreation = (creationPackage: JSON) => {
  
      fetch(`/student`, {
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
        <h1 className="font-semibold">Student</h1>
        </>
    )
}
