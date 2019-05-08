import React from 'react'

const Choices = props => {
  const { types, handleChoice } = props
  return (
    <>
      {Object.keys(types).map((choice, i) => {
        const Choice = types[choice]
        return <Choice key={i} onClick={() => handleChoice(choice)} />
      })}
    </>
  )
}

export default Choices
