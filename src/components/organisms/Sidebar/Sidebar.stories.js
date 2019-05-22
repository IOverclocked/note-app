import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import Sidebar from './Sidebar';

storiesOf('Organisms/Sidebar', module)
  .addDecorator(StoryRouter())
  .add('Notes', () => <Sidebar />)
  .add('Articles', () => <Sidebar activeColor="articles" />)
  .add('Twitters', () => <Sidebar activeColor="twitters" />);
