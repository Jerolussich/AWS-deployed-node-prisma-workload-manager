import React, { FormEvent, useState } from 'react'
import Navbar from './Navbar';

function register(prop: any) {

  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[name, setName] = useState("");


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  }

  return (
    <>
    <Navbar/>
    <form onSubmit={handleSubmit}>
      <label htmlFor='name' className='pr-2'>Name</label>
      <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder='Fran Perez' id="name" name="name"/>
      <label htmlFor="email" className='pr-2'>Email</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='youremail@gmail.com' id="email" name="email"/>
      <label htmlFor="password" className='pr-2'>Password</label>
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="*******" id="password" name="password"/>
      <button>Register</button>
    </form>
    </>
  )
}

export default register
