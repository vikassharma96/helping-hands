import React from 'react';
import renderer from 'react-test-renderer';
import DummyComponent from '../../source/Components/DummyComponent';

it('should match snapshot', () => {
  const tree = renderer.create(<DummyComponent />).toJSON();
  expect(tree).toMatchSnapshot()
});
