import type { Meta, StoryObj } from '@storybook/react';
import Header from '../../../src/components/LaunchCard/components/Header';

const meta = {
  title: 'Components/Molecules/Header',
  component: Header,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    missionName: 'Falcon 9 Test Flight',
    missionId: ['1'],
    rocketName: 'Falcon 9',
  },
};

export const LongMissionName: Story = {
  args: {
    missionName: 'Very Long Mission Name That Should Wrap To Multiple Lines',
    missionId: ['LONG-1', 'LONG-2'],
    rocketName: 'Super Heavy Lift Vehicle',
  },
};

export const NoMissionId: Story = {
  args: {
    missionName: 'Falcon 9 Test Flight',
    missionId: [],
    rocketName: 'Falcon 9',
  },
};