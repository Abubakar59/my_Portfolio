

const About = () => {
  return (
    <div>
      <div className="justify-items-center"><h1 className="font-bold text-2xl">About Me: </h1>
        <div className=" ml-1">


          I’m a Junior React Developer with a BSc in Computer Science, passionate about crafting seamless, user-friendly web applications. My academic background has provided me with a strong foundation in programming, algorithms, and problem-solving, which I apply daily to build efficient and scalable applications. I specialize in React.js, where I focus on creating dynamic, interactive front-end solutions that meet modern user expectations.

          Beyond my coding skills, I also have a unique expertise in phone repairs. I’m an expert in diagnosing and fixing mobile devices, which has helped me develop a keen attention to detail, troubleshooting skills, and the ability to solve complex issues under pressure. This hands-on experience has further strengthened my problem-solving abilities, whether I’m fixing a device or debugging code.

          I’m constantly looking to expand my knowledge and grow as a developer, bringing my diverse skill set to any project I take on. Whether it’s developing cutting-edge web applications or fixing tech issues, I’m ready to tackle challenges and help drive success.
        </div>



      </div>

      <div className=" justify-around flex">
        <div className=" bg-blue-400 h-{50%} w-80"><img src="./images/lafiagi.jpg" alt="" className="w-70 ml-4 mt-3 border-2" />
          <div className="ml-2">


            <span>Name:Abubakar usman</span>
            <br></br>
            <span>Mobile:+23490****** </span>
            <br></br>
            <span>State:Abuja</span>
            <br></br>
            <span>Country:Nigeria</span>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold"> React Web Developer</h1>
          <div className="">


            <p>As a React Web Developer,</p>
            <p> I specialize in building modern,</p>


            <p>
              dynamic web applications using React.
            </p><p> I focus on creating efficient, reusable, </p>

            <p>and interactive components that</p><p> provide seamless user experiences.</p>

          </div>
          <div className="justify-items-center text-2xl">
            <h1 className="font-bold"> Skills</h1>
            <div className=" justify-between flex gap-40">
              <div>HTML</div>
              <div>90%</div>
            </div>
            <div className="h-2 bg-blue-400 w-70"></div>



            <div className=" justify-between flex gap-45 mr-3">
              <div>Css</div>
              <div>70%</div>
            </div>
            <div className="h-2 bg-blue-400 w-65 mr-4"></div>
            <div className=" justify-between flex gap-23 mr-6">
              <div>Javascript</div>
              <div>50%</div>
            </div>
            <div className="h-2 bg-blue-400 w-60 mr-9"></div>


            <div className=" justify-between flex gap-30 mr-10">
              <div>React</div>
              <div>40%</div>
            </div>
            <div className="h-2 bg-blue-400 w-55 mr-11"></div>
          </div>
        </div>


      </div>

    </div>
  )
}

export default About
