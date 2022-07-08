import React from 'react'

export const Message = (props: any) => {
  return (
    <div>
        <p className=" text-gray-400 pt-2"> {props.title} </p>
        <textarea className=' border-b-2 w-full pb-20' />
    </div>
  )
}
