import React from 'react';
import Adapter from 'enzyme-adapter-react-15';
import { render, configure } from 'enzyme';
import NavBar from '../NavBar.jsx';

configure({ adapter: new Adapter() });

test('Should match the previously taken snapshot', () => {
  const navBar = render(<NavBar />);
  expect(navBar).toMatchSnapshot();
});
