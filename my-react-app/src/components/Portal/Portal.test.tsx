import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Portal from './Portal';

afterEach(cleanup);

test('renders children inside a portal container', () => {
  const wrapperId = 'test-wrapper';
  const childElement = <div data-testid="child-element">Hello, world!</div>;
  const { getByTestId } = render(<Portal wrapperId={wrapperId}>{childElement}</Portal>);

  const wrapperElement = document.getElementById(wrapperId);
  expect(wrapperElement).toBeInTheDocument();

  const childElementInPortal = getByTestId('child-element');
  expect(childElementInPortal).toBeInTheDocument();
  expect(childElementInPortal.parentElement).toBe(wrapperElement);
});
