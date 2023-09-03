import React from 'react'
import {BiMessage} from  'react-icons/bi';

const MsgIcon = () => {
  return (
    <div className='fixed bg-gray-900 rounded-full p-4 bottom-24 right-10 text-white border border-white z-10 hover:cursor-pointer'>
        <BiMessage size={22}/>
    </div>
  )
}

export default MsgIcon