import React from 'react'
import Arrow from '../images/Arrow.jpeg'

export default function Footer() {
  return (
    <div>
        

<footer class="bg-[url('https://firebase-two-ebon.vercel.app/static/media/slider-landing.6e498fa9efcd76337624.jpg')]">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class=" text-center text-white">
            <h2 className='text-[32px] '>Publish your passions, your way</h2>
            <p className='pt-6'>Create a unique and beautiful blog easily.</p>
            <button className='bg-orange-500 mt-4 p-[3px_10px]'>CREATE YOUR BLOG</button>
            <br/>
            <br/>
            <i className='text-[24px]'>Discover storytelling through our captivating story</i>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className='flex justify-between items-center '>
          <h2 className='text-left'>Blog-<span>st</span></h2>
          <h3 className='text-center text-white text-[20px]'>Stay Connected with Blogs</h3>
          <img src={Arrow} width={40} height={40} className='rounded-3xl cursor-pointer' alt="" />

        </div>
    </div>
</footer>


    </div>
  )
}
