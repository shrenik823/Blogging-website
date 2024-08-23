import React from 'react'

export default function Login() {
  return (
    <div>
        <div className='max-w-[1170px] text-center  m-[60px_auto] '>
            <h2 className='text-[40px]'>Log In</h2>
            <div className='mx-auto text-center'>
              <input type="text" required="" name="email" placeholder="Email or Username" class="w-full border-none bg-transparent outline-none placeholder:italic m-[20px_530px]  focus:outline-none"/>
              {/* <hr color='lightgrey' /> */}
            </div>
        </div>
    </div>
  )
}
