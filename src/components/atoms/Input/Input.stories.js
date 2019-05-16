import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './Input';

storiesOf('Input', module)
  .add('Normal', () => <Input placeholder="Note" />)
  .add('Search', () => <Input placeholder="Search..." search />);
