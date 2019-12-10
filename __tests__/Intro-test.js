import React from 'react';
import Intro from '../App';

import renderer from 'react-test-renderer';

test('OKAY', () => {
  const tree = renderer.create(<Intro />).toJSON();
  expect(tree).toMatchSnapshot();
});