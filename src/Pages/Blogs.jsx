import { Container } from 'postcss'
import React from 'react'
import Login from '../images/Login.jpeg'

export default function Blogs() {
  return (
    <div>
        <section className='mt-9'>
            <div className='  max-w-[1250px] mx-auto'>
                <div className='grid grid-cols-3 gap-6'>
                    <div className='shadow-lg shadow-indigo-500/40 ... h-[300px]'>
                        <h2 className='text-[24px] p-[20px_12px] font-bold'>Bootstrap List</h2>
                        <p className='p-[3px_12px]'>Bootstrap’s list of the best blog website templates makes them fully responsive and mobile-friendly. What’s more, they are all compatible with modern web browsers and quick to edit. You can use these superb blog templates for lifestyle, food, personal, fashion, finance, travel, technology, or other blogging projects</p>
                        <p className='p-[10px_12px]'>3 months ago</p>
                    </div>
                    <div className='shadow-lg shadow-indigo-500/40 ... h-[300px]'>
                        <h2 className='text-[24px] p-[20px_12px] font-bold'>Artificial Intelligence</h2>
                        <p className='p-[3px_12px]'>Artificial Intelligence (AI) is revolutionizing modern healthcare by enhancing diagnostics, treatment planning, and patient care. AI algorithms can analyze medical images, predict disease progression, and personalize treatment plans. This technology has the potential to improve patient outcomes, reduce healthcare costs</p>
                        <p className='p-[10px_12px]'>3 months ago</p>
                    </div>
                    <div className='shadow-lg shadow-indigo-500/40 ... h-[300px]'>
                        <h2 className='text-[24px] p-[20px_12px] font-bold'>The Benefits of Meditation</h2>
                        <p className='p-[3px_12px]'>Meditation and mindfulness offer numerous benefits for both mental and physical well-being. Regular practice can reduce stress, improve focus and concentration, enhance self-awareness, and promote emotional health. These practices encourage living in the present moment, leading to a more balanced and fulfilling life.</p>
                        <p className='p-[10px_12px]'>3 months ago</p>
                    </div>
                    <div className='shadow-lg shadow-indigo-500/40 ... h-[300px]'>
                        <h2 className='text-[24px] p-[20px_12px] font-bold'>"programming language</h2>
                        <p className='p-[3px_12px]'>"Whether HTML is or is not technically a “programming” language is an ongoing debate among web developers and experts. While the majority defines HTML as a “markup” language (not a programming language) some argue the two aren’t mutually exclusive." https://blog.hubspot.com/website/html</p>
                        <p className='p-[10px_12px]'>3 months ago</p>
                    </div>
                    <div className='shadow-lg shadow-indigo-500/40 ... h-[300px]'>
                        <h2 className='text-[24px] p-[20px_12px] font-bold'>HTML for Beginners</h2>
                        <p className='p-[3px_12px]'>"HTML is the foundation of basically every web page. It’s how we tell browsers to structure content into paragraphs, headings, images, links, lists, forms, tables, buttons, and more. If you’re interested in building a website, web development, or just coding in general, learning HTML is a great place to start." https://blog.hubspot.com/website/html</p>
                        <p className='p-[10px_12px]'>3 months ago</p>
                    </div>
                    <div className='shadow-lg shadow-indigo-500/40 ... h-[300px]'>
                        <h2 className='text-[24px] p-[20px_12px] font-bold'>Check out your competition.</h2>
                        <p className='p-[3px_12px]'>"It’s worth taking a look at popular, highly reviewed blogs because their strategy and execution is what got them to grow in credibility. The purpose of doing this isn’t to copy these elements, but to gain better insight into what readers appreciate in a quality blog." https://blog.hubspot.com/marketing/how-to-start-a-blog</p>
                        <p className='p-[10px_12px]'>3 months ago</p>
                    </div>
                </div>
                
                <img src={Login} className='m-[30px_auto] cursor-pointer rounded-md' alt="" />
            </div>
        </section>
    </div>
  )
}
