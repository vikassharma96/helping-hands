import React from 'react';
import renderer from 'react-test-renderer';
import App from '../source';

test('renders learn react link', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot()
});
