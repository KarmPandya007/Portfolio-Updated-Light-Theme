import React from 'react'
import contactphoto from '../assets/contactphoto.jpg'

const Contact = () => {

    const openlinkedin = () => {
        window.open("https://www.linkedin.com/in/karm-pandya-055ba9363/");
    }
    const opentwitter = () => {
        window.open("https://x.com/");
    }
    const openinsta = () => {
        window.open("https://www.instagram.com/karmpandya007/?hl=en");
    }
    const opengithub = () => {
        window.open("https://github.com/KarmPandya007");
    }

    return (
        <div className="z-30">
            <section
                id="contact"
                className="relative flex items-center justify-center bg-gradient-to-br from-[#f8fafc] via-[#e0e7ef] to-[#fdf2f8] py-12 px-4"
                style={{ minHeight: "60vh" }}
            >
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <img
                        src={contactphoto}
                        alt="Contact background"
                        className="w-full h-full object-cover object-center rounded-3xl"
                    />
                </div>
                <div className="relative z-10 w-full max-w-4xl mx-auto bg-white/95 rounded-3xl shadow-2xl border border-[#e5e7eb] p-8 md:p-12 flex flex-col gap-8">
                    <header className="mb-2 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b] tracking-tight mb-1">
                            Contact Me
                        </h2>
                        <p className="text-base text-[#64748b] font-medium">
                            Let's start a conversation.
                        </p>
                    </header>
                    <form className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row gap-3">
                            <input type="text" placeholder="Full Name" className="flex-1 p-3 rounded-lg bg-[#f1f5f9] text-[#1e293b] border border-[#d1d5db] focus:outline-none focus:border-blue-500 shadow-sm transition" />
                            <input type="email" placeholder="Email Address" className="flex-1 p-3 rounded-lg bg-[#f1f5f9] text-[#1e293b] border border-[#d1d5db] focus:outline-none focus:border-blue-500 shadow-sm transition" />
                        </div>
                        <textarea placeholder="Your Message" rows={3} className="p-3 rounded-lg bg-[#f1f5f9] text-[#1e293b] border border-[#d1d5db] focus:outline-none focus:border-blue-500 resize-none shadow-sm transition" />
                        <button type="submit" className="w-full md:w-auto self-start px-6 py-2 bg-blue-700 hover:bg-blue-600 text-white font-semibold rounded-xl transition-all duration-200 hover:cursor-pointer" > Send Message </button>
                    </form>
                    <div className="flex flex-col items-center gap-2 mt-1">
                        <span className="text-[#334155] text-sm font-medium">Or connect with me:</span>
                        <div className="flex flex-row gap-4 mt-1">
                            <button onClick={openlinkedin} className="rounded-full bg-white border border-[#e0e0e0] shadow-md p-3 hover:bg-blue-100 hover:cursor-pointer hover:scale-115 transition"> <i className="fa-brands fa-linkedin text-blue-700 text-xl"></i> </button>
                            <button onClick={opengithub} className="rounded-full bg-white border border-[#e0e0e0] shadow-md p-3 hover:bg-gray-100 hover:cursor-pointer hover:scale-115 transition"> <i className="fa-brands fa-github text-slate-800 text-xl"></i> </button>
                            <button onClick={opentwitter} className="rounded-full bg-white border border-[#e0e0e0] shadow-md p-3 hover:bg-blue-100 hover:cursor-pointer hover:scale-115 transition"> <i className="fa-brands fa-x-twitter text-gray-900 text-xl"></i> </button>
                            <button onClick={openinsta} className="rounded-full bg-white border border-[#e0e0e0] shadow-md p-3 hover:bg-pink-50 hover:cursor-pointer hover:scale-115 transition"> <i className="fa-brands fa-instagram text-pink-500 text-xl"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section >
        </div>
    )
}


export default Contact