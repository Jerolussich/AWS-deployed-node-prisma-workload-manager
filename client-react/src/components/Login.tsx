import React from 'react'
import { FormEvent } from 'react';
import { useState } from 'react'
import Navbar from './Navbar';

function login(prop: any) {

  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  }



  return (
    <>
    <Navbar/>
    <form onSubmit={handleSubmit}>
      <label htmlFor="email" className='pr-2'>Email</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='youremail@gmail.com' id="email" name="email"/>
      <label htmlFor="password" className='pr-2'>Password</label>
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="*******" id="password" name="password"/>
      <button>Log in</button>
    </form>
    <button><a href='/register'>Register</a></button>
    </>
  )
}

export default login
