import React from 'react';
import renderer from 'react-test-renderer';
import DummyScreen from '@screens/dummyScreen';

it('should match snapshot', () => {
  const tree = renderer.create(<DummyScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
