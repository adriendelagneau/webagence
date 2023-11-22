import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Image from 'next/image';


const Modal = ({modal, projects}) => {
  
    const { active, index } = modal;

    const modalContainer = useRef(null);
    const cursor = useRef(null);

    useEffect( () => {
  
        //Move Container
        let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {duration: 0.8, ease: "power3"})
        let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {duration: 0.8, ease: "power3"})
        //Move cursor
        let xMoveCursor = gsap.quickTo(cursor.current, "left", {duration: 0.5, ease: "power3"})
        let yMoveCursor = gsap.quickTo(cursor.current, "top", {duration: 0.5, ease: "power3"})
        //Move cursor label
    
    
        window.addEventListener('mousemove', (e) => {
          const { pageX, pageY } = e;
          xMoveContainer(pageX)
          yMoveContainer(pageY)
          xMoveCursor(pageX)
          yMoveCursor(pageY)
    
        })
      }, [])
    
    
      useEffect(() => {
        // Using GSAP to animate the modal based on the 'active' boolean
        if (active) {
          gsap.to(modalContainer.current, { scale: 1, duration: 0.5, ease: 'power2.out' });
        } else {
          gsap.to(modalContainer.current, { scale: 0, duration: 0.5, ease: 'power2.out' });
        }
      }, [active]);

    return (
        <div ref={modalContainer}  className="h-[350px] w-[400px] absolute overflow-hidden pointer-events-none flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 scale-0 ">
        <div style={{top: index * -100 + "%"}}  className="h-full w-full absolute transition-top duration-300 ease-in-out cubic-bezier(0.76, 0, 0.24, 1)">
        {
            projects.map( (project, index) => {
            const { src, color } = project
            return <div className="h-full w-full flex items-center justify-center" style={{backgroundColor: color}} key={`modal_${index}`}>
                <Image
                src={`/images/${src}`}
                width={300}
                height={0}
                className='h-auto'
                alt="image"
                />
            </div>
            })
        }
        </div>
    </div>
  )
}

export default Modal