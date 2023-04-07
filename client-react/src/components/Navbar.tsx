import React from 'react'

function navbar() {
  return (
<div className="shadow bg-white">
  <div className="h-16 mx-auto px-5 flex items-center justify-between">
      <a className="text-2xl hover:text-cyan-500 transition-colors cursor-pointer" href="/">Learn</a>
      
      <ul className="flex items-center gap-5">
        <li><a className="hover:text-cyan-500 transition-colors" href="/student">Students</a></li>
        <li><a className="hover:text-cyan-500 transition-colors" href="/teacher">Teachers</a></li>
        <li><a className="hover:text-cyan-500 transition-colors" href="/hoursworked">Hoursworked</a></li>
        <li><a className="hover:text-cyan-500 transition-colors" href="/login">Log in</a></li>
      </ul>
  </div>
</div>
  )
}

export default navbar
