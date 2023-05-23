import React from 'react'

const button = (props) => {
  return (
    <a href="" className='px-5 py-3 rounded-xl bg-gradient-to-r from-[#3B29FF] to-[#9C4FFF] filter shadow-md shadow-violet-700 text-white text-lg md:text-2xl font-extralight'><button >{props.children}</button></a>
  )
}

export default button