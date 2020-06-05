import React from 'react';
import { render } from '@testing-library/react';
import { Basic, Disabled } from './ui-button.stories';

test('Basic button', () => {
  const { container } = render(<Basic label="Hello" />);

  expect(container.firstChild).toMatchInlineSnapshot(`
    <button
      class="ui-button"
    >
      Hello
    </button>
  `);
});

test('Disabled button', () => {
  const { container } = render(<Disabled />);

  expect(container.firstChild).toMatchInlineSnapshot(`
    <button
      class="ui-button ui-button--disabled"
      disabled=""
    >
      Click me
    </button>
  `);
});
