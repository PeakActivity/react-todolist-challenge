import React from 'react';
import ReactDOM from 'react-dom';
import Input from './index';

// Utils
import store from '../../utils';

it('Input renders without crashing', () => {
  const div = document.createElement('div');

  const props = {
    name: "item",
    placeholder: "item test",
    onChange: jest.fn()
  };

  ReactDOM.render(<Input { ...props }/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
