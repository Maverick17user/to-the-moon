import type { Meta, StoryObj } from '@storybook/react';
import LaunchCard from '../../../src/components/LaunchCard/LaunchCard';

const meta = {
  title: 'Components/Organisms/LaunchCard',
  component: LaunchCard,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LaunchCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    missionName: 'Falcon 9 Test Flight',
    missionId: ['1'],
    rocketName: 'Falcon 9',
    launchDate: '2010-06-04T18:45:00.000Z',
    details: 'First test flight of the Falcon 9 rocket.',
    imageUrl: 'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png',
    fairingsRecovered: true,
    success: true,
  },
};

export const NoImage: Story = {
  args: {
    missionName: 'Mission Without Image',
    missionId: ['2'],
    rocketName: 'Falcon 9',
    launchDate: '2023-01-01T00:00:00.000Z',
    details: 'This mission has no associated image.',
    imageUrl: null,
    fairingsRecovered: false,
    success: false,
  },
};

export const MinimalData: Story = {
  args: {
    missionName: 'Minimal Mission',
    missionId: [],
    rocketName: 'Unknown Rocket',
    launchDate: '2024-12-31T00:00:00.000Z',
    details: null,
    imageUrl: null,
    fairingsRecovered: null,
    success: null,
  },
};