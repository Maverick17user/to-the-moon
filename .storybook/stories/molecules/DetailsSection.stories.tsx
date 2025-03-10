import type { Meta, StoryObj } from '@storybook/react';
import DetailsSection from '../../../src/components/LaunchCard/components/DetailsSection';

const meta = {
  title: 'Components/Molecules/DetailsSection',
  component: DetailsSection,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DetailsSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithDetails: Story = {
  args: {
    details: 'First test flight of the Falcon 9 rocket with a Dragon mock-up.',
  },
};

export const NoDetails: Story = {
  args: {
    details: null,
  },
};

export const LongDetails: Story = {
  args: {
    details: 'This is a very long description that contains multiple sentences. It should demonstrate how the component handles large amounts of text. The text should wrap properly and maintain readability while staying within the constraints of the card layout.',
  },
};