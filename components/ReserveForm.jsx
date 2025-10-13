"use client";

import { useEffect } from 'react';

export function ReserveForm({ open, setOpen }) {

  useEffect(() => {
    open
      ? document.body.style.overflow = 'hidden'
      : document.body.style.overflow = 'auto'
  }, [open])

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('submit')
  }

  return (
    <div onClick={() => setOpen(false)} className={`fixed left-0 top-0 z-30 w-screen h-screen bg-black/60 transition-all duration-300 flex justify-center items-center ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      <div className="flex flex-col items-center w-full h-full mt-[10%]">
        <h2 className="font-head text-[4vw] mb-16 text-white">Резервирай бус</h2>
        <div className="flex justify-around w-full">
          <div className='flex flex-col p-4 pt-0 text-white rounded-lg border border-white'>
            <p className='accent-head text-[4vw]'>1.</p>
            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
          <div className='flex flex-col p-4 pt-0 text-white rounded-lg border border-white'>
            <p className='accent-head text-[4vw]'>2.</p>
            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
          <div className='flex flex-col p-4 pt-0 text-white rounded-lg border border-white'>
            <p className='accent-head text-[4vw]'>3.</p>
            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full mt-32">
          <form onClick={(e) => e.stopPropagation()} onSubmit={handleSubmit} className="grid gap-3 w-[30%] card p-6">
            <input placeholder="Име" className="rounded-s border border-pebble/60 px-4 py-3 bg-white/80" />
            <input type="email" placeholder="Имейл" className="rounded-s border border-pebble/60 px-4 py-3 bg-white/80" />
            <div className="grid grid-cols-2 gap-3">
              <input type="date" className="rounded-s border border-pebble/60 px-4 py-3 bg-white/80" />
              <input type="date" className="rounded-s border border-pebble/60 px-4 py-3 bg-white/80" />
            </div>
            <button className="px-5 py-3 rounded-pill bg-coffee text-white shadow-soft">РЕЗЕРВИРАЙ</button>
          </form>
        </div>
      </div>
    </div>
  )
}