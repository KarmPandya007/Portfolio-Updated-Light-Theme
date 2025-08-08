import React from 'react'

const Footer = () => {
    const newDate = new Date().getFullYear()
    return (
        <footer className="my-10 text-center text-sm text-[#1e293b] pt-8 border-t border-[#c4c4c4] bg-gradient-to-r from-white via-gray-100 to-white shadow-inner">
            <div className="flex flex-col items-center space-y-2">
                <div className="flex items-center space-x-3">
                    <span className="text-xl font-semibold tracking-wide text-[#0f172a]">Karm Pandya</span>
                </div>
                <p className="text-xs text-[#64748b]">
                  {newDate} Karm Pandya. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer