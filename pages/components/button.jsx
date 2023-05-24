import React from 'react'

const button = (props) => {
  return (
    <a href="" className='px-10 py-6 rounded-xl bg-gradient-to-r from-[#3B29FF] to-[#9C4FFF] filter shadow-md shadow-purple-600 text-white text-lg md:text-3xl font-extralight'><button >{props.children}</button></a>
  )
}

export default button