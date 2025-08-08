import React from 'react'
import blog1photo from '../assets/BlogPhotos/blog1photo.png'
import blog2photo from '../assets/BlogPhotos/blog2photo.png'

const Blogs = () => {

    const openblog1 = () => {
        window.open("https://medium.com/@karmpandya14/7-best-tips-for-react-developers-to-write-clean-and-efficient-code-b46a6c9fe7a7")
    }
    const openblog2 = () => {
        window.open("https://medium.com/@karmpandya14/master-the-s-o-l-i-d-principles-write-cleaner-smarter-code-d1c58f04fd69")
    }

    return (
        <div id="blogs" className=" bg-[#ffffff] text-white py-15 pb-30 flex flex-col px-4">
            <div className="w-full max-w-[1000px] mx-auto">
                <p className="text-[#1e293b] text-3xl font-bold mb-6">Blogs</p>

                <div className="flex flex-col gap-10">
                    {/* Blog 1 */}
                    <div className="flex flex-col md:flex-row justify-between items-center p-6 bg-[#eeeeee] rounded-xl gap-6">
                        <div className="text-[#1e293b] flex-1">
                            <p className="mb-2 font-bold">Blog On React</p>
                            <p className="my-6 text-xl sm:text-2xl">
                                🚀 7 Best Tips for React Developers to Write <br className="hidden sm:block" />
                                Clean and Efficient Code
                            </p>
                            <button
                                onClick={openblog1}
                                target="_blank"
                                className="text-white bg-blue-700 my-2 py-2 px-3 rounded-xl hover:bg-blue-600 cursor-pointer transition"
                            >
                                Read Blog
                            </button>
                        </div>
                        <div>
                            <img
                                src={blog1photo}
                                alt=""
                                className="h-40 w-full sm:w-72 rounded-xl object-cover"
                            />
                        </div>
                    </div>

                    {/* Blog 2 */}
                    <div className="flex flex-col md:flex-row justify-between items-center p-6 bg-[#eeeeee] rounded-xl gap-6">
                        <div className="text-[#1e293b] flex-1">
                            <p className="mb-2 font-bold">Blog On S.O.L.I.D. Principles</p>
                            <p className="my-6 text-xl sm:text-2xl">
                                🧠 Master the S.O.L.I.D. Principles: Write Cleaner <br className="hidden sm:block" />
                                and Smarter Code!
                            </p>
                            <button
                                onClick={openblog2}
                                target="_blank"
                                className="text-white bg-blue-700 my-2 py-2 px-3 rounded-xl hover:bg-blue-600 cursor-pointer transition"
                            >
                                Read Blog
                            </button>
                        </div>
                        <div>
                            <img
                                src={blog2photo}
                                alt=""
                                className="h-40 w-full sm:w-72 rounded-xl object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Blogs