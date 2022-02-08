import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    id: {
      type: { required: false },
      description: 'id description',
    },
    name: {
      type: { required: false },
      description: 'name description',
    },
    type: {
      type: { required: false },
      description: 'type description',
    },
    className: {
      type: { required: false },
      description: 'className description',
    },
    label: {
      type: { required: false },
      description: 'label description',
    },
    onClick: {
      type: { required: false },
      description: 'onClick description',
    },
    disabled: {
      type: { required: false },
      description: 'disabled description',
    },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const ButtonTemplate: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const TestButton = ButtonTemplate.bind({});

TestButton.args = {
  type: 'button',
  label: 'Button',
};
