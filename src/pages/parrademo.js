import React from 'react'
import { Parallax } from 'react-parallax'
import space from '../images/space1.jpg'

function parrademo() {
  return (
    <div className="m-0 p-0 box-border text-center">
        <div className='min-h-full'>testest
        <Parallax strength={600} >
            <img className='h-auto max-w-full' src={space}/>
        <div className='text-3xl text-green-500'>Text for scroll
        </div>
        </Parallax>
        
        
        </div>
    </div>
    
    
    
  )
}

export default parrademo