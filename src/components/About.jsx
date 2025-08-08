import React from 'react'

const About = () => {
  return (
    <div id="about" className=" bg-[#ffffff] text-[#1e293b] pt-30 pb-10 px-4">
      <div className="w-full max-w-[1000px] mx-auto">
        <p className="text-3xl font-bold mb-4">About Me</p>

        <p className="text-[#243147] text-lg sm:text-xl leading-relaxed mb-6">
          I'm a <span className="font-semibold text-[#1e293b]">MERN Stack developer</span> with hands-on experience building scalable, full-stack web apps using{" "}
          <span className="font-semibold text-[#1e293b]">MongoDB, </span>
          <span className="font-semibold text-[#1e293b]">ExpressJS, </span>
          <span className="font-semibold text-[#1e293b]">ReactJS</span>, and{" "}
          <span className="font-semibold text-[#1e293b]">Node.js</span>. I specialize in{" "}
          <span className="font-semibold text-[#1e293b]">clean UIs, efficient APIs, and end-to-end product development</span> that just works — fast, sleek, and reliable.
        </p>
      </div>
    </div>

  )
}

export default About