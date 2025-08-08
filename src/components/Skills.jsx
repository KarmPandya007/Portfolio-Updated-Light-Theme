import React from 'react'
import htmllogo from '../assets/SkillsPhotos/html5-original.svg'
import csslogo from '../assets/SkillsPhotos/css3-original.svg'
import tailwindlogo from '../assets/SkillsPhotos/tailwind.svg'
import bootstraplogo from '../assets/SkillsPhotos/bootstrap.svg'
import jslogo from '../assets/SkillsPhotos/javascript-original.svg'
import reactlogo from '../assets/SkillsPhotos/react-original.svg'
import nodejslogo from '../assets/SkillsPhotos/nodejs-original.svg'
import expresslogo from '../assets/SkillsPhotos/express-original.svg'
import mongodblogo from '../assets/SkillsPhotos/mongodb-original.svg'

const Skills = () => {
    return (

        <div id='skills' class=" flex flex-wrap justify-center gap-6 px-4 mb-10">
            <div className="flex flex-row flex-wrap gap-10 items-center justify-center w-[1000px] mx-auto">
                <div class="flex flex-col items-center bg-white rounded-lg shadow-xl p-4 w-28 hover:scale-120 cursor-pointer transition">
                    <img src={htmllogo} alt="HTML" class="h-16 hover:" />
                    <p class="mt-2 font-bold text-blue-900 text-center">HTML</p>
                </div>

                <div class="flex flex-col items-center bg-white rounded-lg shadow-xl p-4 w-28 hover:scale-120 cursor-pointer transition">
                    <img src={csslogo} alt="CSS" class="h-16" />
                    <p class="mt-2 font-bold text-blue-900 text-center">CSS</p>
                </div>

                <div class="flex flex-col items-center bg-white rounded-lg shadow-xl p-4 w-28 hover:scale-120 cursor-pointer transition">
                    <img src={tailwindlogo} alt="Tailwind" class="h-16" />
                    <p class="mt-2 font-bold text-blue-900 text-center">Tailwind</p>
                </div>

                <div class="flex flex-col items-center bg-white rounded-lg shadow-xl p-4 w-28 hover:scale-120 cursor-pointer transition">
                    <img src={bootstraplogo} alt="Bootstrap" class="h-16" />
                    <p class="mt-2 font-bold text-blue-900 text-center">Bootstrap</p>
                </div>

                <div class="flex flex-col items-center bg-white rounded-lg shadow-xl p-4 w-28 hover:scale-120 cursor-pointer transition">
                    <img src={jslogo} alt="JavaScript" class="h-16" />
                    <p class="mt-2 font-bold text-blue-900 text-center">JavaScript</p>
                </div>

                <div class="flex flex-col items-center bg-white rounded-lg shadow-xl p-4 w-28 hover:scale-120 cursor-pointer transition">
                    <img src={reactlogo} alt="React JS" class="h-16" />
                    <p class="mt-2 font-bold text-blue-900 text-center">React JS</p>
                </div>

                <div class="flex flex-col items-center bg-white rounded-lg shadow-xl p-4 w-28 hover:scale-120 cursor-pointer transition">
                    <img src={nodejslogo} alt="Node JS" class="h-16" />
                    <p class="mt-2 font-bold text-blue-900 text-center">Node JS</p>
                </div>

                <div class="flex flex-col items-center bg-white rounded-lg shadow-xl p-4 w-28 hover:scale-120 cursor-pointer transition">
                    <img src={expresslogo} alt="Express JS" class="h-16" />
                    <p class="mt-2 font-bold text-blue-900 text-center">Express JS</p>
                </div>

                <div class="flex flex-col items-center bg-white rounded-lg shadow-xl p-4 w-28 hover:scale-120 cursor-pointer transition">
                    <img src={mongodblogo} alt="MongoDB" class="h-16" />
                    <p class="mt-2 font-bold text-blue-900 text-center">MongoDB</p>
                </div>

            </div>

        </div>


    )
}

export default Skills