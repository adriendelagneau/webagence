'use client';
import React from 'react'

const Project = ({index, title, year, setModal}) => {
    return (
       <div className='group project transition-all flex w-full justify-between items-center px-[50px] py-[55px] cursor-pointer border-b-2 border-skin-border '  onMouseEnter={() => {setModal({active: true, index})}} onMouseLeave={() => {setModal({active: false, index})}} >
            <h2 className='m-0 text-5xl transition-all group-hover:-translate-x-5'>{title}</h2>
            <p className='text-3xl transition-all group-hover:translate-x-5'>{year }</p>
      </div>
    )
}

export default Project