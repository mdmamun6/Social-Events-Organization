import React from 'react'

export default function About() {
  return (
    <div>
      <div className="hero py-20">
          <div className="hero-content flex  flex-col lg:flex-row">
            <div className='w-1/2'>
              <img className='rounded-lg' src="http://diejohnsons.samcoderswebsolutions.com/wp-content/uploads/2023/07/photography_1.jpg" />
            </div>
            <div className='w-1/2 px-10'>
              <h1 className="text-5xl font-bold">About Us</h1>
              <p className="py-6 font-medium">At Social Events, we specialize in creating memorable moments that last a lifetime. Our passion is crafting and executing exceptional social gatherings, from weddings and birthdays to anniversaries, engagement parties, retirements, and baby showers. With a commitment to excellence and a touch of creativity, we turn your dreams into reality.

              <br/><br/>

              With years of experience in the industry, we have established relationships with top-notch vendors, stunning venues, and talented entertainers. This allows us to offer you a wide range of choices and resources to make your event truly spectacular.

              Let's work together to design the social event of your dreams. Contact us today to get started on your journey to a perfect celebration.</p>
            </div>
          </div>
      </div>

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
      </div>
  )
}
