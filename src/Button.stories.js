import React from 'react';

import { storiesOf, setAddon, addDecorator } from '@storybook/react';

import JSXAddon from 'storybook-addon-jsx';
setAddon(JSXAddon);

import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
addDecorator(withKnobs);

import { Button } from './Button';
import { wInfo } from './utils';

storiesOf('Button', module)
  .addWithJSX(
    'with background',
    wInfo(`
      description
      
      ~~~js
      <Button>slkdjslkdj</Button>
      ~~~
      `)(() => <Button bg="palegoldenrod">Hello world</Button>),
  )
  .addWithJSX('with background 2', () => (
    <Button disabled={boolean('disabled', false)}>
      {text('text', 'Hello world')}
    </Button>
  ));
