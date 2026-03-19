import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from './input';

const meta: Meta<InputComponent> = {
  title: 'Components/Input',
  component: InputComponent,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number'],
    },
    valueChange: { action: 'valueChange' }, // ← Muestra el evento en Actions panel
  },
};

export default meta;
type Story = StoryObj<InputComponent>;

export const Default: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
  },
};

export const WithHelper: Story = {
  args: {
    label: 'Username',
    placeholder: 'johndoe',
    helperText: 'Your username must be unique',
  },
};

export const WithError: Story = {
  args: {
    label: 'Password',
    type: 'password',
    hasError: true,
    errorText: 'Password must be at least 8 characters',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'Cannot edit',
    disabled: true,
    value: 'Disabled value',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Name',
    placeholder: 'Enter your name',
    value: 'John Doe',
  },
};

export const Interactive: Story = {
  args: {
    label: 'Interactive Input',
    placeholder: 'Type something...',
  },
  render: (args) => ({
    props: args,
    template: `
      <div>
        <ds-input
          [label]="label"
          [placeholder]="placeholder"
          [type]="type"
          [(value)]="value"
          (valueChange)="onValueChange($event)">
        </ds-input>
        <p style="margin-top: 12px; color: #71717a;">
          Current value: <strong>{{ value || '(empty)' }}</strong>
        </p>
      </div>
    `,
  }),
};
