import React from 'react';

export default function Contact() {

  const handleFromSubmit = (e) =>{
    e.preventDefault()
    const firstname = e.target.firstname.value;
    const lastname = e.target.lastname.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const detail = e.target.detail.value;
    console.log('from submited', firstname, lastname, email, phone, detail)
  }
  
  return (
    <div className='mx-auto w-[80%]'>
      <div className="text-center justify-center py-20">
        <h1 className="text-5xl font-bold">Contact Us</h1>
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
  );
}
