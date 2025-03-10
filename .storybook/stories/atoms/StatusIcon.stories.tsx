import type { Meta, StoryObj } from '@storybook/react';
import StatusIcon from '../../../src/components/LaunchCard/components/StatusIcon';

const meta = {
  title: 'Components/Atoms/StatusIcon',
  component: StatusIcon,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StatusIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    success: true,
  },
};

export const Failed: Story = {
  args: {
    success: false,
  },
};

export const Unknown: Story = {
  args: {
    success: null,
  },
};