import React from 'react'

function Choices(props) {
  const { choices, setChoice } = props
  return (
    <>
      {choices.map((choice, i) => (
        <button key={i} onClick={() => setChoice(i)}>
          {choice}
        </button>
      ))}
    </>
  )
}

export default Choices
