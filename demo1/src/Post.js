import React, { Component } from 'react'

export default class Post extends Component {
  render() {
    return (
      <div>
        <p>
         <b>Text:</b><i>{this.props.content}</i>
        </p>

        <p>Post by :{this.props.name}</p>
      </div>
    );
  }
}
