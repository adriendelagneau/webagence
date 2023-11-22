'use client';
import React from 'react'

const Project = ({index, title, year, setModal}) => {
    return (
       <div className='group project transition-all flex w-full justify-between items-center px-[50px] py-[55px] cursor-pointer border-b-2 border-[#1a2842] '  onMouseEnter={() => {setModal({active: true, index})}} onMouseLeave={() => {setModal({active: false, index})}} >
            <h2 className='group-hover:-translate-x-5 m-0 transition-all text-5xl'>{title}</h2>
            <p className='group-hover:translate-x-5 transition-all text-3xl'>{year }</p>
      </div>
    )
}

export default Project