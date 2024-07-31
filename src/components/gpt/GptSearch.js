import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSearchSuggestion from './GptSearchSuggestion'

const GptSearch = () => {
  return (

    <div>
      <div className="bg-img absolute -z-10">
        <img src="images/NetfixBackground.jpg" alt="bg" />
      </div>
      <GptSearchBar />
      <GptSearchSuggestion />
    </div>
  )
}

export default GptSearch