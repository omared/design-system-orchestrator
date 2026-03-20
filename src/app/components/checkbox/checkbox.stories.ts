import type { Meta, StoryObj } from '@storybook/angular';
import { CheckboxComponent } from './checkbox';

const meta: Meta<CheckboxComponent> = {
  title: 'Components/Checkbox',
  component: CheckboxComponent,
  tags: ['autodocs'],
  argTypes: {
    checkedChange: { action: 'checkedChange' },
  },
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

export const Interactive: Story = {
  args: {
    label: 'I agree to the terms',
    checked: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <div>
        <ds-checkbox 
          [label]="label"
          [checked]="checked"
          [disabled]="disabled"
          (checkedChange)="checked = $event">
        </ds-checkbox>
        <p style="margin-top: 12px; color: #71717a;">
          Status: <strong>{{ checked ? 'Checked ✓' : 'Unchecked' }}</strong>
        </p>
      </div>
    `,
  }),
};
