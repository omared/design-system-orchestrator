import type { Meta, StoryObj } from '@storybook/angular';
import { SwitchComponent } from './switch';

const meta: Meta<SwitchComponent> = {
  title: 'Components/Switch',
  component: SwitchComponent,
  tags: ['autodocs'],
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
