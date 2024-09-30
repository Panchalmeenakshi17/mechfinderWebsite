import React from 'react'

const New = () => {
  return (
    <>
    
    <div className=' flex justify-start items-start
    '>
  
<div class="galaxy"></div>
<div id="search-container">
  <div class="nebula"></div>
  <div class="starfield"></div>
  <div class="cosmic-dust"></div>
  <div class="cosmic-dust"></div>
  <div class="cosmic-dust"></div>

  <div class="stardust"></div>

  <div class="cosmic-ring"></div>

  <div id="main">
    <input
      class="input"
      name="text"
      type="text"
      placeholder="Explore the Service provider..."
    />
    <div id="input-mask"></div>
    <div id="cosmic-glow"></div>
    <div class="wormhole-border"></div>
    <div id="wormhole-icon">
      <svg
        stroke-linejoin="round"
        stroke-linecap="round"
        stroke-width="2"
        stroke="#a9c7ff"
        fill="none"
        height="24"
        width="24"
        viewBox="0 0 24 24"
      >
        <circle r="10" cy="12" cx="12"></circle>
        <path
          d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
        ></path>
        <path d="M2 12h20"></path>
      </svg>
    </div>
    <div id="search-icon">
      <svg
        stroke-linejoin="round"
        stroke-linecap="round"
        stroke-width="2"
        stroke="url(#cosmic-search)"
        fill="none"
        height="24"
        width="24"
        viewBox="0 0 24 24"
      >
        <circle r="8" cy="11" cx="11"></circle>
        <line y2="16.65" x2="16.65" y1="21" x1="21"></line>
        <defs>
          <linearGradient gradientTransform="rotate(45)" id="cosmic-search">
            <stop stop-color="#a9c7ff" offset="0%"></stop>
            <stop stop-color="#6e8cff" offset="100%"></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  </div>
</div>

    </div>
    </>
  )
}

export default New