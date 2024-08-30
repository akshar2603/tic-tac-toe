import React from 'react'

const Square = (props) => {
  return (
     <div
        onClick={props.onClick} 
      style={{
        border: "2px solid", 
        height:"100px", 
        width:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }}
     className='square'>
        {props.value}
     </div>
  )
}

export default Square