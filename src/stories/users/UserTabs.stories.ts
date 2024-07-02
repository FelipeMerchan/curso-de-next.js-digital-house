import type { Meta, StoryObj } from '@storybook/react';

import { UserTabs } from '@/components/users/UserTabs';

const meta = {
  title: 'Users/UserTabs',
  component: UserTabs,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof UserTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const messages = [
  {
    name: "Anakin Skywalker",
    username: "anakin",
    message: "Primer mensaje",
    repliesCount: 13,
  },
  {
    name: "Anakin Skywalker",
    username: "anakin",
    message: "Segundo mensaje",
    repliesCount: 13,
  },
]

const replies = [
  {
    name: 'Han Solo',
    username: 'HanSolo',
    message: 'Primer mensaje',
    repliesCount: 13,
  },
  {
    name: 'Yoda',
    username: 'yoda',
    message: 'Yoda mensaje',
    repliesCount: 3,
  },
];

export const MessageTab: Story = {
  args: {
    messages,
    replies,
  },
};