import React from 'react';
import ReactDOM from 'react-dom';
import Button from './index';

// Utils
import store from '../../utils';

it('Button renders without crashing', () => {
  const div = document.createElement('div');

  const props = {
    onClick: jest.fn(),
    type: "add"
  };

  ReactDOM.render(<Button { ...props }/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
