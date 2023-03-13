import React from 'react'

const MailList = () => {
  return (
    <div className="mailList">
      <div className="mailContainer">
        <div className="mailTitle">
          <center>
            <h1> Save time, save money</h1>
          </center>
          <center>
            <p className="title" >
              Sign up and we'll send the best deais to you
            </p>
          </center>
        </div>
        <div className="input">
          <center>
            <input
              type="email"
              placeholder="Your Email"
              className="inputemail"
            />

            <button className="btn">
              Subscribe
            </button>
          </center>
        </div>

        <div className="body">
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default MailList