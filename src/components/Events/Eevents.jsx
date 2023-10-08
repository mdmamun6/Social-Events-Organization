import React, { useEffect, useState } from 'react'
import Event from '../Event/Event';

export default function Eevents() {

  const [events, setEvents] =useState([]);

  useEffect(() => {
    fetch('events.json')
    .then(res => res.json())
    .then(data => setEvents(data))
  },[])
  return (
    <div>
      <div className='grid grid-cols-3 gap-6'>
          {
            events.map(event => <Event key={event.id} event={event}></Event>)
          }
      </div>
    </div>
  )
}
