import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa6";
const Contact = () => {
  return (
    <div>
      <div> <h4 className="text-2xl font-bold justify-center items-center flex">  React Web Developer</h4></div>
      <div className=' flex justify-around ml-1 gap-1'>


        <div className="h-{50%} w-80"><img src="./images/lafiagi.jpg" alt="" className="rounded-2xl" />

        </div>

        <div className=" ">


          <p>As a React Web Developer,
            I specialize in building modern,

            dynamic web applications using React.
          </p>
          <p>
            I focus on creating efficient,reusable,
            and interactive components that
            provide seamless user experiences.</p>

        </div>
      </div>
      <h1 className='flex  justify-center text-3xl'> Details</h1>

      <div>

        <div className="  text-2xm ml-6">


          <span>Name: Abubakar usman</span>
          <br></br>
          <span>Mobile: +2349052361059 </span>
          <br></br>
          <span>State of Origin: Kwara</span>
          <br></br>
          <span>Country: Nigeria</span>
        </div>

        <div></div>
      </div>

      <div className='bg-blue-400  h-50 w-full'>


        <h1 className=' text-white flex items-center justify-center text-2xl'>Get in Touch</h1>

        <div className='flex justify-around text-white mt-4'>


          <div ><FaLocationDot className='ml-4 h-6 w-6 ' />
            <h1>
              Address
            </h1>
          </div>
          <div><FaPhoneSquareAlt className='ml-4 h-6 w-6 ' />
            <h1>
              Phone
            </h1></div>
          <div> <a href=''></a><HiOutlineMail className='ml-4 h-6 w-6 ' />
            <h1>
              Email
            </h1> </div>
          <div> <a href='https://www.linkedin.com/in/abubakarcontentwriter/'> <FaLinkedin className='ml-4 h-6 w-6 ' /></a>
            <h1>
              Linkedin
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
