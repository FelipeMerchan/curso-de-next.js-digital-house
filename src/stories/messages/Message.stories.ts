import type { Meta, StoryObj } from '@storybook/react';

import { Message } from '@/components/messages/Message';

const meta = {
  title: 'Messages/Message',
  component: Message,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Message>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    message: {
      message: 'Mensaje de prueba',
      name: 'Anakin Skywalker',
      username: 'anakin', 
    },
  },
};