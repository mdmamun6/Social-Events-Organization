import React from 'react'
import { GiSpookyHouse } from 'react-icons/gi';
import { Link, useParams  } from 'react-router-dom';

export default function Event({event}) {

    const { id } = useParams();

    const {img, title, description, price, venue} = event;

  return (
    <div>
      <div className="rounded-lg shadow-lg text-left space-y-5">
        <img className='h-[250px] w-full rounded-t-lg rounded-r-lg' src={img} alt="" />
        <div className="px-6 pb-8 space-y-5">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="font-medium custom-text">{description}</p>
            <div className="flex justify-between">
              <div>
                <p className='font-bold'>{price}</p>
              </div>
              <div className='flex gap-2'>
                <GiSpookyHouse className='text-lg'></GiSpookyHouse>
                <p className='font-bold'>{venue}</p>
              </div>
            </div>
            <Link to={`/event/${id}`}><button className='btn btn-primary w-full text-white'>Book Now</button></Link>
        </div>
      </div>
    </div>
  )
}
