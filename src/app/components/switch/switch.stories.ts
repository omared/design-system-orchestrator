
import type { Meta, StoryObj } from '@storybook/angular';
import { SwitchComponent } from './switch';

const meta: Meta<SwitchComponent> = {
  title: 'Components/Switch',
  component: SwitchComponent,
  tags: ['autodocs'],
  argTypes: {
    checkedChange: { action: 'checkedChange' },
  },
};

export default meta;
type Story = StoryObj<SwitchComponent>;

export const Default: Story = {
  args: {
    label: 'Enable notifications',
    size: 'md',
  },
};

export const Checked: Story = {
  args: {
    label: 'Notifications enabled',
    checked: true,
    size: 'md',
  },
};

export const Small: Story = {
  args: {
    label: 'Small switch',
    size: 'sm',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Cannot toggle',
    disabled: true,
    size: 'md',
  },
};

export const WithoutLabel: Story = {
  args: {
    size: 'md',
  },
};

export const Interactive: Story = {
  args: {
    label: 'Dark mode',
    checked: false,
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template: `
      <div>
        <ds-switch 
          [label]="label"
          [checked]="checked"
          [size]="size"
          [disabled]="disabled"
          (checkedChange)="checked = $event">
        </ds-switch>
        <p style="margin-top: 12px; color: #71717a;">
          Mode: <strong>{{ checked ? 'Dark 🌙' : 'Light ☀️' }}</strong>
        </p>
      </div>
    `,
  }),
};