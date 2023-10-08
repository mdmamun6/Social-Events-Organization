import React from 'react'
import Eevents from '../Events/Eevents'

export default function OurServices() {
  return (
    <div>
        <div className="py-20 text-center mx-auto w-[80%]">
          <h1 className="text-5xl  font-bold">Our Services</h1>
          <p className="mb-5 py-6 italic text-lg">we offer a range of celebration packages. Join us in making memories</p>
          <Eevents></Eevents>
        </div>
    </div>
  )
}
