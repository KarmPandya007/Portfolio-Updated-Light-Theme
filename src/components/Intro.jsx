import React from 'react'
// import introphoto from '../assets/introphoto.webp'
import introphoto from '../assets/introphoto.jpg'
import cv from '../assets/Karm Pandya Resume Final Draft .pdf'
import '../App.css'

const Intro = () => {

    const downloadcv = () => {
        window.open(cv)
    }

    return (
        <div id='home' className='flex flex-row justify-center items-center'>

            <div className="flex flex-row justify-center items-center gap-30 px-0 text-stone-900 h-[86vh] w-[1000px] pt-5">

                <div className="flex flex-col items-center justify-center">
                    <p className='text-6xl font-bold my-3 name-class animate-fade-in-up'>
                        KARM PANDYA
                    </p>
                    <p className='my-4 text-3xl font-semibold animate-fade-in-up'>MERN Developer</p>
                    <a href={cv} download>
                        <button onClick={downloadcv} className="mt-4 px-8 sm:px-10 py-4 rounded-full bg-blue-700 text-white font-bold text-lg sm:text-xl shadow-2xl hover:bg-blue-800 transition-all duration-300 border-2 border-white/10 hover:border-white flex items-center gap-3 hover:cursor-pointer animate-fade-in-up" >
                            <i className="fa-solid fa-download"></i>
                            Download CV
                        </button>
                    </a>
                </div>

                <div className="animate-fade-in-up">
                    <img src={introphoto} alt="" className='h-90 w-110' />
                </div>

            </div>


            <style>
                {`
                @keyframes fade-in-down {
                    0% { 
                        opacity: 0; 
                        transform: translateY(-40px);
                    }
                    100% 
                    { 
                        opacity: 1; 
                        transform: translateY(0);
                     }
                }
                     
                @keyframes fade-in-up {
                    0% {
                         opacity: 0; 
                        transform: translateY(40px);
                        }
                    100% { 
                        opacity: 1; 
                        transform: translateY(0);
                        }
                }
                .animate-fade-in-down {
                    animation: fade-in-down 1.5s ;
                }
                .animate-fade-in-up {
                    animation: fade-in-up 1.5s ;
                }
                .name-class {
                    background-image:url("https://i.pinimg.com/736x/d2/46/9f/d2469f3797aa895deb38c97b432f6028.jpg");
                    background-size: cover;
                    background-clip: text;
                    -webkit-background-clip: text;
                    color: transparent;
                }

                `}
            </style>
        </div>
    )
}

export default Intro