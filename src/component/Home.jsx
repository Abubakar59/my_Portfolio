import React from 'react'

const Home = () => {
  return (
    <div >
      <div class="relative">
        <img src="./images/usman1.jpg" alt="image" class="w-full h-full object-cover" />

        <div class="absolute inset-0  bg-[#00000087]  bg-opacity-50 flex items-center justify-center">

          <div className='text-white mt-65 justify-center items-center flex ml-1 text-xs'>
            <p>Are you a business owner looking to scale your digital presence and provide a seamless user experience? Or are you a student working on your final year project and need help bringing your web application to life?

              As a React Developer, I can help create fast, dynamic, and responsive interfaces for your web applications. With React's component-based structure, we can ensure faster development and easy updates, which is crucial in today's fast-paced business world.</p>
          </div>


        </div>
      </div>
      <div className='h-55 bg-amber-500'>
        <h1 className='text-2xl ml-1'>Benefits of Working with Me:
        </h1>
        <div className='ml-2'><p>
          - Fast and responsive interfaces for a seamless user experience
        </p>
          <p>
            - Faster development and easy updates with React's component-based structure
          </p>
          <p>
            - Freeing up more senior developers to tackle complex back-end tasks
          </p>
          <p>

            - Custom web application development tailored to your needs
          </p>

        </div>


      </div>
      <div >
        <h1 className='text-2xl ml-2 text-purple-950  '>Potential Projects:</h1>

        <div className='ml-2 text-purple-950'>
          <p>-Web application development for businesses</p>
          <p>-Final year projects for students</p>
          <p>-Digital transformation projects</p>
          <p>-E-commerce website development</p>
          <p>-Custom web application development</p>
        </div>
      </div>
      <div className='bg-green-800 text-white'>

        <h1 className='ml-2 text-2xl'>Let's Collaborate!</h1>
        <div className=' ml-2'>
          <p>If you're looking for a reliable and skilled  React Developer to help </p>
          <p>with your web application development, I'd love to discuss your project </p>
          <p>further. Please feel free to reach out to me to explore how we can work </p>
          <p>together to bring your vision to life.</p>
        </div>
      </div>
    </div>
  )
}

export default Home
