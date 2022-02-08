import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button as Button_T } from './Button_T';
import { Button as Button_Y } from './Button_Y';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Button',
  component: Button_T,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button_T>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const TJ: ComponentStory<typeof Button_T> = (args) => <Button_T {...args} />;
const YS: ComponentStory<typeof Button_Y> = (args) => <Button_Y {...args} />;

export const TJButton = TJ.bind({});
export const YSButton = YS.bind({});

TJButton.args = {
  primary: true,
  label: 'Button',
};

YSButton.args = {
  primary: true,
  label: 'Button',
};
