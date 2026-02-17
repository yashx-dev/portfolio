import React from 'react'

const Terminal = () => {
  return (
    <div className="terminal-container justify-self-center hidden lg:w-100 lg:block">
      <div className="terminal bg-linear-to-br from-gray-900 to-gray-950 lg:rounded-l-xl lg:rounded-r-none rounded-xl lg:shadow-[-8px_0_20px_rgba(0,0,0,0.5)] shadow-[10px_20px_20px_rgba(0,0,0,0.5)] shadow-black border-l border-[#72727B]/40 overflow-hidden">
        {/* Terminal Header */}
        <div className="terminal-header flex items-center justify-between px-4 py-3 bg-gray-800/50 border-b border-gray-700">
          {/* Window Controls */}
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500 cursor-pointer"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 cursor-pointer"></div>
            <div className="w-3 h-3 rounded-full bg-green-500 cursor-pointer"></div>
          </div>

          {/* Terminal Title */}
          <div className="text-sm font-mono text-gray-300 ml-8">
            terminal@portfolio:~$
          </div>

          {/* Empty div for spacing */}
          <div className="w-12"></div>
        </div>

        {/* Terminal Body */}
        <div className="terminal-body p-4 font-mono text-sm">
          <div className="space-y-3">
            {/* Command Lines */}
            <div className="flex">
              <span className="text-green-400 mr-2">$</span>
              <span className="text-cyan-300">whoami</span>
            </div>
            <div className="text-gray-300 ml-4 space-y-1">
              <div>Yash Khandelwal</div>
              <div>Web Developer</div>
              <div>Digital Creator</div>
            </div>

            <div className="flex mt-4">
              <span className="text-green-400 mr-2">$</span>
              <span className="text-cyan-300">pwd</span>
            </div>
            <div className="text-gray-300 ml-4">/home/portfolio</div>

            <div className="flex mt-4">
              <span className="text-green-400 mr-2">$</span>
              <span className="text-cyan-300">ls -la</span>
            </div>
            <div className="text-gray-300 ml-4 space-y-1">
              <div>drwxr-xr-x projects/</div>
              <div>drwxr-xr-x about/</div>
              <div>drwxr-xr-x contact/</div>
              <div>-rw-r--r-- skills.txt</div>
            </div>

            <div className="flex mt-4">
              <span className="text-green-400 mr-2">$</span>
              <span className="text-cyan-300">cat skills.txt</span>
            </div>
            <div className="text-gray-300 ml-4">
              NextJs • React • <br /> ExpressJs •
              NodeJs • <br /> MongoDB • Responsive Design
            </div>

            {/* Cursor */}
            <div className="flex mt-6">
              <span className="text-green-400 mr-2">$</span>
              <div className="flex items-center">
                <span className="terminal-cursor text-cyan-300">_</span>
              </div>
            </div>
          </div>
        </div>

        {/* Terminal Footer */}
        <div className="terminal-footer px-4 py-2 bg-gray-800/30 border-t border-gray-700 text-xs text-gray-500">
          <div className="flex justify-between">
            <span>vim</span>
            <span>UTF-8</span>
            <span>bash</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Terminal