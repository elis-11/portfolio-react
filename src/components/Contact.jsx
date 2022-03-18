/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "../styles/Contact.scss";

// {/* <div name='contact' className='w-full h-screen bg-[#1d1d1d] flex justify-center items-center p-4'> */}
// {/* <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='flex flex-col max-w-[600px] w-full'> */}
// {/* <div className='pb-8'> */}
// {/* <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p> */}
// {/* <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - myemail@gmail.com</p> */}
// {/* </div> */}
// {/* <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' /> */}
// {/* <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' /> */}
// {/* <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea> */}
// {/* <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button> */}
// {/* </form> */}
// {/* </div>  */}
const Contact = () => {
  return (
    <div name="contact" className="Contact">
// {/* <div name='contact' className='w-full h-screen bg-[#1d1d1d] flex justify-center items-center p-4'> */}
      <div className="container">
        <form
          method="POST"
          action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c"
        >
          <div className="input">
            <input
              className="cont-in"
              type="text"
              id="userName"
              minLength="1"
              placeholder="Name*"
            />
            <input
              className="cont-in"
              type="text"
              id="email"
              minLength="5"
              placeholder="Email*"
            />
          </div>
          <input
            className="input--top"
            type="text"
            id="subject"
            minLength="1"
            placeholder="Subject (optional)"
          />
          <input
            className="input--bottom"
            type="text"
            id="message"
            minLength="1"
            placeholder="Message*"
          />
          <p className="mail">
            Or you can just mail me at~
            <a className="email" href="mailto:eliza.arzanukaeva@gmail.com">
              eliza.arzanukaeva@gmail.com
            </a>
          </p>

          {/* <a className="btn" href="#">Send</a> */}
          <button>Send</button>
          {/* <a className="button" href="mailto:eliza.arzanukaeva@gmail.com">
            Send
          </a> */}
        </form>
      </div>
    </div>
  );
};

export default Contact;
