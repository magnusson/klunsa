import React, { useState, useEffect } from 'react'

function Results(props) {
  const { choices, choice } = props
  const [aiChoice, setAiChoice] = useState(0)
  const [winner, setWinner] = useState(null)
  useEffect(() => {
    setAiChoice(Math.floor(Math.random() * choices.length))
    const result = (3 + choice - aiChoice) % 3
    switch (result) {
      case 1:
        setWinner('you')
        break
      case 2:
        setWinner('ai')
        break
      default:
        setWinner('tie')
        break
    }
  }, [])
  return (
    <div>
      <p>You: {choices[choice]}</p>
      <p>AI: {choices[aiChoice]}</p>
      <h2>Winner: {winner}</h2>
    </div>
  )
}

export default Results
