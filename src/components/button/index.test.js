// write a simple test that can test the button component here...
import React from 'react'
import {shallow} from 'enzyme'
import Button from './index'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })
describe('Button Component ', () => {
  it('renders', () => {
    const button = shallow(<Button />)
    expect(button).toHaveLength(1)
  })

  it('button Clicked', () => {
    let mockClick = jest.fn()
    const props = {
      onClick: mockClick,
      type: 'add',
      children: 'Add Button'
    }
    const button = shallow(<Button {...props}/>)
    button.simulate('click')
    console.log(button.props())
    expect(mockClick).toHaveBeenCalledTimes(1)
    expect(button.props().className).toEqual('button add')
    expect(button.props().children).toEqual('Add Button')
    
  })
})