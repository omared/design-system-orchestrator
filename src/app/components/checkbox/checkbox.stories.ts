import type { Meta, StoryObj } from '@storybook/angular';
import { CheckboxComponent } from './checkbox';

const meta: Meta<CheckboxComponent> = {
  title: 'Components/Checkbox',
  component: CheckboxComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<CheckboxComponent>;

export const Default: Story = {
  args: {
    label: 'Accept terms and conditions',
  },
};

export const Checked: Story = {
  args: {
    label: 'Already accepted',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Cannot change',
    disabled: true,
  },
};

export const WithoutLabel: Story = {
  args: {
    label: '',
  },
};
