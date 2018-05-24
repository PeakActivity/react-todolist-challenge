// write a test that tests the App component here...

import React from 'react';
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'


import App from './App';
import { shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'


describe('App component', () => {
  configure({ adapter: new Adapter() })
  const initialState = {
    list: { todos: [],
        error: '',
        editItem: '',
        actionStatus: 'START',
        deletedItem:{}
    }
  }; 
  const mockStore = configureMockStore()
  let wrapper;
  let store;
  let props;
  beforeEach(() => {
    store = mockStore(initialState)
    wrapper = <App store={store} {...props}/>
   })
  it('renders without crash', () => {
    const app = shallow(wrapper)
    expect(app).toHaveLength(1)
  })

  it('Handles input Changes ', () => {
    
    const app = shallow(wrapper)
    
    let fuc = jest.spyOn(app.instance(), 'handleChange')
    app.update()
    console.log(app.instance())
    app.instance().handleChange('New TODo text')
    expect(fuc).toHaveBeenCalledTimes(1)
  })

})
