import React from 'react'
import ReactDOM from 'react-dom'
import Choices from './Choices'
import { ReactComponent as Rock } from '../rock.svg'
import { ReactComponent as Scissor } from '../scissors.svg'
import { ReactComponent as Paper } from '../paper.svg'

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
  const types = { rock: Rock, paper: Paper, scissor: Scissor }
  ReactDOM.render(<Choices types={types} />, container)
})
