

import React from 'react'

const Navbar = (props) => {
    return (

        <div style={{backgroundColor:props.color}} className=' w-full m-1 flex items-center justify-between px-4'>
            <div className='bg-blue w-fit '>
                <h1 className=' w-fit text-2xl font-bold'>{props.name}</h1>
            </div>
            <div className='bg-blue w-fit m-2 p-2 rounded flex items-center'>
                <h1 className='text-2xl font-bold'>
                    {
                        props.links.map((elem) => {
                            return <span className='m-2'>{elem}</span>
                        })
                    }
                </h1>
            </div>
        </div>


    )

}

export default Navbar