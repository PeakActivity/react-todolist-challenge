// write a simple test that can test the input component here...
// write a simple test that can test the button component here...
import React from 'react'
import {shallow} from 'enzyme'
import Input from './index'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })
describe('Input Component ', () => {
  it('renders', () => {
    const button = shallow(<Input />)
    expect(button).toHaveLength(1)
  })
it('onChange event is called ', () => {
  let mockClick = jest.fn()
    const props = {
      onChange: mockClick,
      className: 'input-style',
      value: 'Input text',

    }
    const input = shallow(<Input {...props}/>)
    const mockedEvent = { target: {} }
    input.simulate('change', mockedEvent)
    
    expect(mockClick).toHaveBeenCalledTimes(1)
    expect(input.props().className).toEqual('input-style')
    
    
})
  
})