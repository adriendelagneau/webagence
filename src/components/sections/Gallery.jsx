'use client'
import React, { useState } from 'react'
import Project from '../Project'
import Modal from '../Modal'

const projects = [
    {
      title: "C2 Montreal",
      src: "c2montreal.png",
      color: "#000000",
      year: "2019"
    },
    {
      title: "Office Studio",
      src: "officestudio.png",
      color: "#8C8C8C",
      year: "2020"
    },
    {
      title: "Locomotive",
      src: "locomotive.png",
      color: "#EFE8D3",
      year: "2021"
    },
    {
      title: "Silencio",
      src: "silencio.png",
      color: "#706D63",
      year: "2023"
    }
  ]
  

const Gallery = () => {

    const [modal, setModal] = useState({ active: false, index: 0 })
    
  return (
    <div className="flex h-screen items-center justify-center">
    <div className="w-[90%] flex flex-col items-center justify-center">
      {
        projects.map( (project, index) => {
          return <Project index={index} year={project.year} title={project.title} setModal={setModal} key={index}/>
        })
      }
    </div>
    <Modal modal={modal} projects={projects}/>
  </div>
  )
}

export default Gallery