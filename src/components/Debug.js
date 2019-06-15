import React from 'react'

const Debug = props => (
  <div>
    <button onClick={() => props.handleDebug('home')}>Home</button>
    <button onClick={() => props.handleDebug('game')}>Game</button>
    <button onClick={() => props.handleDebug('result')}>Result</button>
  </div>
)

Debug.propTypes = {}

export default Debug
