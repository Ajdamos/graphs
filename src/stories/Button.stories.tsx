import type { Meta, StoryObj } from '@storybook/react';

import  Button  from '../components/primitive/Button';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonBlue: Story = {
  args:{
    label: 'Button',
    color: 'blue',
    size: 'medium',
  }
}


export const ButtonBlack: Story = {
  args: {
    label: 'Button',
    color: 'black',
    size: 'medium',

  },
};

export const ButtonGreen: Story = {
  args: {
    label: 'Button',
    color: 'green',
    size: 'medium',
  },
};

export const ButtonOrange: Story = {
  args: {
    label: 'Button',
    color: 'orange',
    size: 'medium',
  },
};

export const ButtonRed: Story = {
  args: {
    label: 'Button',
    color: 'red',
    size: 'medium',
  },
};