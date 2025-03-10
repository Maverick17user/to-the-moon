import type { Meta, StoryObj } from '@storybook/react';
import LaunchDate from '../../../src/components/LaunchCard/components/LaunchDate';

const meta = {
  title: 'Components/Atoms/LaunchDate',
  component: LaunchDate,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LaunchDate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    launchDate: '2010-06-04T18:45:00.000Z',
  },
};

export const FutureDate: Story = {
  args: {
    launchDate: '2025-01-01T00:00:00.000Z',
  },
};