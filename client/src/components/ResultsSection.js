import React from 'react'

const ResultsSection = ({ children }) => {
    return (
        <div class="results">
          <h3 style={{ marginLeft: "20px", paddingTop: "20px"}}>Results</h3>
          {children}
        </div>
    )
}

export default ResultsSection
