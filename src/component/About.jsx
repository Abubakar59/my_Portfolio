

const Sign = () => {
  return (
    <div>
      <div className="justify-items-center"><h1 className="font-bold text-2xl">About</h1></div>

      <div className="justify-items-center">
        <div><img src="./images/lafiagi.jpg" alt="" className="w-70" /></div>
        <div className=" ml-2">
          <h1 className="text-2xl font-bold"> React Web Developer</h1>
          <div>


            <p>As a React Web Developer,</p>
            <p> I specialize in building modern,</p>


            <p>
              dynamic web applications using React.
            </p><p> I focus on creating efficient, reusable, </p>

            <p>and interactive components that</p><p> provide seamless user experiences.</p>

          </div>

        </div>


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
  )
}

export default Sign
