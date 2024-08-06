import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSearchSuggestion from './GptSearchSuggestion'

const GptSearch = () => {
  return (
    <>
      <div className="bg-img fixed -z-10">
        <img className="h-screen w-screen object-cover" src="images/NetfixBackground.jpg" alt="bg" />
      </div>
      <div className='pt-[50%] md:pt-0'>
        <GptSearchBar />
        <GptSearchSuggestion />
      </div>
    </>
  )
}

export default GptSearch