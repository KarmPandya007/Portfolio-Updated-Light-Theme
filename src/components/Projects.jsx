import React from 'react'
import foodieshubphoto1 from '../assets/ProjectPhotos/foodieshubphoto1.png'
import mosointeriorphoto2 from '../assets/ProjectPhotos/mosointeriorphoto2.png'
import scenicphoto1 from '../assets/ProjectPhotos/scenicphoto1.png'

const Projects = () => {

  const openproject1 = () => {
    window.open("https://github.com/KarmPandya007/Foodies-Hub-React-Tailwind")
  }
  const openproject2 = () => {
    window.open("https://github.com/KarmPandya007/Moso-Interior-React-Tailwind")
  }
  const openproject3 = () => {
    window.open("https://github.com/KarmPandya007/Scenic-React-Tailwind")
  }

  return (
    <div id="projects" className=" bg-[#ffffff] text-white py-20 flex flex-col px-4">
      <div className="w-full max-w-[1000px] mx-auto">
        <p className="text-[#1e293b] text-3xl font-bold mb-6">Projects</p>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Project 1 */}
          <div className="flex flex-col gap-6 bg-[#eeeeee] p-6 rounded-xl flex-1 w-full">
            <div>
              <img src={foodieshubphoto1} alt="" className="h-40 w-full rounded-xl object-cover" />
              <p className="my-3 text-sm text-[#1e293b]">Personal Project</p>
              <p className="my-3 text-2xl font-bold text-[#1e293b]">Foodie's Hub</p>
              <p className="my-3 text-[#1e293b]">
                Foodie's Hub is a React and Tailwind-based web app where users explore, cook, and enjoy diverse global recipes.
              </p>
              <button onClick={openproject1} className="text-white bg-blue-700 p-2 px-4 rounded-xl hover:bg-blue-600 cursor-pointer transition" >
                View Project
              </button>
            </div>
          </div>

          {/* Project 2 */}
          <div className="flex flex-col gap-6 bg-[#eeeeee] p-6 rounded-xl flex-1 w-full">
            <div>
              <img src={mosointeriorphoto2} alt="" className="h-40 w-full rounded-xl object-cover" />
              <p className="my-3 text-sm text-[#1e293b]">Personal Project</p>
              <p className="my-3 text-2xl font-bold text-[#1e293b]">Moso Interior</p>
              <p className="my-3 text-[#1e293b]">
                Moso Interior is a sleek React and Tailwind website that beautifully showcases elegant home decor and furniture designs.
              </p>
              <button onClick={openproject2} className="text-white bg-blue-700 p-2 px-4 rounded-xl hover:bg-blue-600 cursor-pointer transition" >
                View Project
              </button>
            </div>
          </div>

          {/* Project 3 */}
          <div className="flex flex-col gap-6 bg-[#eeeeee] p-6 rounded-xl flex-1 w-full">
            <div>
              <img src={scenicphoto1} alt="" className="h-40 w-full rounded-xl object-cover" />
              <p className="my-3 text-sm text-[#1e293b]">Personal Project</p>
              <p className="my-3 text-2xl font-bold text-[#1e293b]">Scenic</p>
              <p className="my-3 text-[#1e293b]">
                Scenic is a sleek media agency website built with React and Tailwind, showcasing creative services and stunning visuals.
              </p>
              <button onClick={openproject3} className="text-white bg-blue-700 p-2 px-4 rounded-xl hover:bg-blue-600 cursor-pointer transition" >
                View Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Projects