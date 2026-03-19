import type { Meta, StoryObj } from '@storybook/angular';
import { CardComponent } from './card';

const meta: Meta<CardComponent> = {
  title: 'Components/Card',
  component: CardComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<CardComponent>;

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    padding: 'md',
  },
  render: (args) => ({
    props: args,
    template: `
      <ds-card [variant]="variant" [padding]="padding">
        <h3 style="margin: 0 0 12px 0; font-size: 20px;">Card Title</h3>
        <p style="margin: 0; color: #71717a;">
          This is a card with elevated shadow. It lifts on hover for better interaction feedback.
        </p>
      </ds-card>
    `,
  }),
};

export const Flat: Story = {
  args: {
    variant: 'flat',
    padding: 'md',
  },
  render: (args) => ({
    props: args,
    template: `
      <ds-card [variant]="variant" [padding]="padding">
        <h3 style="margin: 0 0 12px 0; font-size: 20px;">Flat Card</h3>
        <p style="margin: 0; color: #71717a;">No shadow, minimal style.</p>
      </ds-card>
    `,
  }),
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    padding: 'md',
  },
  render: (args) => ({
    props: args,
    template: `
      <ds-card [variant]="variant" [padding]="padding">
        <h3 style="margin: 0 0 12px 0; font-size: 20px;">Outlined Card</h3>
        <p style="margin: 0; color: #71717a;">With border, no shadow.</p>
      </ds-card>
    `,
  }),
};
