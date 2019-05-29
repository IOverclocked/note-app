import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import NewItemBar from './NewItemBar';

storiesOf('Organisms/NewItemBar', module)
  .addDecorator(StoryRouter())
  .add('Normal', () => <NewItemBar />);
