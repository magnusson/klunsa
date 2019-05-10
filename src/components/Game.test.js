import React from 'react'
import ReactDOM from 'react-dom'
import Game from './Game'

let container

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  document.body.removeChild(container)
  container = null
})

it('renders without crashing', () => {
  ReactDOM.render(<Game players={{ playerOne: 0, playerTwo: 0 }} />, container)
})
