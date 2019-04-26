import React from 'react'

function Choices(props) {
  const { choices, setChoice } = props
  return (
    <>
      {Object.keys(choices).map((choice, i) => {
        const Choice = choices[choice]
        return <Choice key={i} onClick={() => setChoice(choice)} />
      })}
    </>
  )
}

export default Choices
