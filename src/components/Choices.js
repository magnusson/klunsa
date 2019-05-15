import React from 'react'
import styled from 'styled-components'

const Icon = styled.span`
  width: calc(100% / 3);
  display: inline-block;
  text-align: center;
`

const Choices = props => {
  const { types, handleChoice } = props
  return (
    <>
      {Object.keys(types).map((choice, i) => {
        const Choice = types[choice]
        return (
          <Icon key={i}>
            <Choice onClick={() => handleChoice(choice)} />
          </Icon>
        )
      })}
    </>
  )
}

export default Choices
