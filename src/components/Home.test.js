import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import Home from './Home'

import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

let container
describe('SearchEntry', () => {
  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    document.body.removeChild(container)
    container = null
  })

  it('renders without crashing', () => {
    ReactDOM.render(<Home playerId="playerOne" />, container)
  })

  it('Initial render shows loading', () => {
    const wrapper = <Home playerId="playerOne" />
    const text = wrapper.find('p').text()
    expect(text).toContain('Send this link to challenge someone')
  })
})
