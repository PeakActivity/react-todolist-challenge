import React from 'react';
import ReactDOM from 'react-dom';
import List from './index';

// Utils
import store from '../../utils';

it('List renders without crashing', () => {
  const div = document.createElement('div');

  const props = {
    items: [{
      id: 1,
      message: 'test'
    }],
    editItem: jest.fn(),
    deleteItem: jest.fn(),
    updateItem: jest.fn()
  };

  ReactDOM.render(<List { ...props }/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
