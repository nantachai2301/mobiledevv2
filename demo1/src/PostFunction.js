import React from 'react'

export default function PostFunction  (props) {
  return (
      <div>
        <p>
         <b>Text:</b><i>{props.content}</i>
        </p>

        <p>Post by :{props.name}</p>
      </div>
    );
  
}

