import React from 'react'
import "./Comment.css"

export const Comment = (props) => {
  return (
    <div className="dialogbox">
        <div className="body">
        <span className="tip tip-up"></span>
        <div className="message"></div>
        <span>
            <b>{props.userId}</b> -{props.message}
        </span>
        </div>

    </div>
  )
}

