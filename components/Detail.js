import React from 'react'

export default function Detail({handlerIsClose}) {
  return (
    <div className="flex justify-center items-center w-full h-full bg-slate-500 fixed overflow-hidden top-0 left-0 z-10 ">
      <div className="w-1/2 h-1/2 bg-white">
      <button
        type="button"
        onClick={handlerIsClose}>Close</button>
      <h1>FERM</h1>
      </div>
    </div>
  )
}
