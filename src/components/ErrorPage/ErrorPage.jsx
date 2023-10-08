import React from 'react'

export default function ErrorPage() {
  return (
    <div>
        <div class="min-h-screen flex flex-col items-center justify-center">
            <img className='w-1/3' src="http://diejohnsons.samcoderswebsolutions.com/wp-content/uploads/2023/10/404-error-e1696724909819.jpg" alt="" />
            <p class="text-xl md:text-2xl text-gray-700 mt-2">Oops! Page not found.</p>
            <p class="text-lg text-gray-600 mt-2">Sorry, but the page you are looking for does not exist.</p>
            <a href="/" class="mt-4 px-6 py-3 text-white bg-primary rounded-lg text-lg hover:bg-primary transition">Go back to Home</a>
        </div>
    </div>
  )
}
