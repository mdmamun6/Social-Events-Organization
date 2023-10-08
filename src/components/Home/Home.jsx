import React, { useContext } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'
import { Link } from 'react-router-dom';
import Eevents from '../Events/Eevents';

export default function Home() {

  const handleFromSubmit = (e) =>{
    e.preventDefault()
    const firstname = e.target.firstname.value;
    const lastname = e.target.lastname.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const detail = e.target.detail.value;
    console.log('from submited', firstname, lastname, email, phone, detail)
  }

  const authInfo = useContext(AuthContext);
  console.log(authInfo)
  return (
    <div>
      {/* Hero Section */}
        <div className="hero min-h-screen" style={{backgroundImage: 'url(http://diejohnsons.samcoderswebsolutions.com/wp-content/uploads/2023/10/pexels-анна-хазова-5005252-scaled.jpg)'}}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content space-y-6 text-center text-neutral-content">
            <div className=" w-1/2">
              <h1 className="mb-5 text-white text-7xl uppercase font-bold">let's <br></br>have a party</h1>
              <p className="mb-5 italic text-lg">From weddings to birthdays, anniversaries to engagements, retirements, and baby showers, we offer a range of celebration packages. Customize your special day at our charming venues. Join us in making memories</p>
              <Link to='/contact'><button className="btn bg-white font-medium px-8 text-primary uppercase">Get Started</button></Link>
            </div>
          </div>
        </div>

        {/* About Us */}
        <div className="hero py-20">
          <div className="hero-content flex  flex-col lg:flex-row">
            <div className='w-1/2'>
              <img className='rounded-lg' src="http://diejohnsons.samcoderswebsolutions.com/wp-content/uploads/2023/10/col-bg-001.jpg" />
            </div>
            <div className='w-1/2'>
              <h1 className="text-5xl font-bold">About Us</h1>
              <p className="py-6 font-medium">At Social Events, we specialize in creating memorable moments that last a lifetime. Our passion is crafting and executing exceptional social gatherings, from weddings and birthdays to anniversaries, engagement parties, retirements, and baby showers. With a commitment to excellence and a touch of creativity, we turn your dreams into reality.

              Our dedicated team of event planners, designers, and coordinators is here to ensure that every detail of your special occasion is meticulously planned and flawlessly executed. We understand that each event is unique, and we tailor our services to match your vision, style, and budget.<br/><br/>

              With years of experience in the industry, we have established relationships with top-notch vendors, stunning venues, and talented entertainers. This allows us to offer you a wide range of choices and resources to make your event truly spectacular.

              Let's work together to design the social event of your dreams. Contact us today to get started on your journey to a perfect celebration.</p>
              <button className="btn text-white btn-primary">Learn More</button>
            </div>
          </div>
        </div>

        {/* Events */}
        <div className="pb-20 text-center mx-auto w-[80%]">
          <h1 className="text-5xl  font-bold">Our Services</h1>
          <p className="mb-5 py-6 italic text-lg">we offer a range of celebration packages. Join us in making memories</p>
          <Eevents></Eevents>
        </div>

        {/* Photos */}
        <div className="pb-20 text-center mx-auto w-[80%]">
          <h1 className="text-5xl  font-bold">Photo Gallery</h1>
          <p className="mb-5 py-6 italic text-lg">we offer a range of celebration packages. Join us in making memories</p>
          <div class="grid grid-cols-3 gap-4">
              <div class="rounded-lg h-[250px] overflow-hidden shadow-lg">
                  <img src="http://diejohnsons.samcoderswebsolutions.com/wp-content/uploads/2023/10/col-bg-001.jpg" alt="" />
              </div>
              <div class="rounded-lg h-[250px] overflow-hidden shadow-lg">
                  <img src="http://diejohnsons.samcoderswebsolutions.com/wp-content/uploads/2023/07/photography_1.jpg" alt="" />
              </div>
              <div class="rounded-lg h-[250px] overflow-hidden shadow-lg">
                  <img src="http://diejohnsons.samcoderswebsolutions.com/wp-content/uploads/2023/10/pexels-анна-хазова-5005252-scaled.jpg" alt="" />
              </div>
              <div class="rounded-lg h-[250px] overflow-hidden shadow-lg">
                  <img src="http://diejohnsons.samcoderswebsolutions.com/wp-content/uploads/2023/10/depositphotos_56881935-stock-photo-birthday-party-in-club.webp" alt="" />
              </div>
              <div class="rounded-lg h-[250px] overflow-hidden shadow-lg">
                  <img src="http://diejohnsons.samcoderswebsolutions.com/wp-content/uploads/2023/10/50th-wedding-anniversary-ideas-phpP8xnkI.webp" alt="" />
              </div>
              <div class="rounded-lg h-[250px] overflow-hidden shadow-lg">
                  <img src="http://diejohnsons.samcoderswebsolutions.com/wp-content/uploads/2023/08/Untitled-design-38.png" alt="" />
              </div>
              <div class="rounded-lg h-[250px] overflow-hidden shadow-lg">
                  <img src="http://diejohnsons.samcoderswebsolutions.com/wp-content/uploads/2023/08/Untitled-design-35.png" alt="" />
              </div>
              <div class="rounded-lg h-[250px] overflow-hidden shadow-lg">
                  <img src="http://diejohnsons.samcoderswebsolutions.com/wp-content/uploads/2023/06/1.png" alt="" />
              </div>
              <div class="rounded-lg h-[250px] overflow-hidden shadow-lg">
                  <img src="http://diejohnsons.samcoderswebsolutions.com/wp-content/uploads/2023/10/baby-shower-blog-image-1200x900-1.png" alt="" />
              </div>
          </div>
        </div>

      {/* Contact Us */}
      <div className="text-center justify-center py-20">
        <h1 className="text-5xl font-bold">Get In Touch</h1>
        <p className="py-6 mb-10 italic text-lg">
          We offer a range of celebration packages. Join us in making memories
        </p>
        <div className="flex justify-center">
          <div className="card flex-shrink-0 w-1/2 shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleFromSubmit}>
                <div className="flex gap-6 font-medium">
                  <div className="form-control w-1/2">
                    <label className="label">
                      <span className="label-text">First Name</span>
                    </label>
                    <input
                      type="text"
                      name='firstname'
                      placeholder="First Name"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control w-1/2">
                    <label className="label">
                      <span className="label-text">Last Name</span>
                    </label>
                    <input
                      type="text"
                      name='lastname'
                      placeholder="Last Name"
                      className="input input-bordered"
                    />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Email</span>
                  </label>
                  <input
                    type="email"
                    name='email'
                    placeholder="Email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone Number</span>
                  </label>
                  <input
                    type="text"
                    name='phone'
                    placeholder="Phone Number"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Want to tell anything?</span>
                  </label>
                  <textarea name='detail' placeholder="Want to tell anything?" className="textarea textarea-bordered textarea-lg w-full " ></textarea>
                </div>
                
                <div className="form-control mt-6">
                  <input className='btn-primary btn text-white' type="submit" value="Submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
