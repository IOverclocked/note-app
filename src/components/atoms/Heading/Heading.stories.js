import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from './Heading';

storiesOf('Heading', module)
  .add('Normal', () => <Heading>Note</Heading>)
  .add('Big', () => <Heading big>Note</Heading>);
