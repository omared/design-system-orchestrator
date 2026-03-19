import type { Meta, StoryObj } from '@storybook/angular';
import { BadgeComponent } from './badge';

const meta: Meta<BadgeComponent> = {
  title: 'Components/Badge',
  component: BadgeComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<BadgeComponent>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template: `<ds-badge [variant]="variant" [size]="size">Default</ds-badge>`,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
        <ds-badge variant="default">Default</ds-badge>
        <ds-badge variant="accent">Accent</ds-badge>
        <ds-badge variant="success">Success</ds-badge>
        <ds-badge variant="warning">Warning</ds-badge>
        <ds-badge variant="error">Error</ds-badge>
      </div>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px; align-items: center;">
        <ds-badge size="sm" variant="accent">Small</ds-badge>
        <ds-badge size="md" variant="accent">Medium</ds-badge>
      </div>
    `,
  }),
};
