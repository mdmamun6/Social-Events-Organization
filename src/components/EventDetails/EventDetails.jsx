import { useLoaderData, useParams } from 'react-router-dom'

export default function EventDetails() {

  const events = useLoaderData();
  const {id} = useParams();
  const eventId = parseInt(id);
  const event = events.find(event => event.id === eventId)
  if (!event) {
    return <div>Event not found</div>;
  }
  return (
    <div className='mx-auto w-[80%]'>
      <h2>Signgle Booking Destails</h2>
      <img src={event.img} alt="" />
    </div>
  )
}
