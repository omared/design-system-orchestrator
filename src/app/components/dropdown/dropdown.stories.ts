import type { Meta, StoryObj } from '@storybook/angular';
import { DropdownComponent } from './dropdown';

const meta: Meta<DropdownComponent> = {
  title: 'Components/Dropdown',
  component: DropdownComponent,
  tags: ['autodocs'],
  argTypes: {
    valueChange: { action: 'valueChange' },
  },
};

export default meta;
type Story = StoryObj<DropdownComponent>;

const countries = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'mx', label: 'Mexico' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'fr', label: 'France' },
  { value: 'de', label: 'Germany' },
];

export const Default: Story = {
  args: {
    label: 'Country',
    placeholder: 'Select a country',
    options: countries,
  },
};

export const WithValue: Story = {
  args: {
    label: 'Country',
    options: countries,
    value: 'us',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Country',
    options: countries,
    value: 'ca',
    disabled: true,
  },
};

export const WithDisabledOptions: Story = {
  args: {
    label: 'Country',
    placeholder: 'Select a country',
    options: [
      { value: 'us', label: 'United States' },
      { value: 'ca', label: 'Canada', disabled: true },
      { value: 'mx', label: 'Mexico' },
    ],
  },
};

export const Interactive: Story = {
  args: {
    label: 'Select your country',
    placeholder: 'Choose...',
    options: countries,
    value: '',
  },
  render: (args) => ({
    props: args,
    template: `
      <div>
        <ds-dropdown 
          [label]="label"
          [placeholder]="placeholder"
          [options]="options"
          [value]="value"
          [disabled]="disabled"
          (valueChange)="value = $event">
        </ds-dropdown>
        <p style="margin-top: 12px; color: #71717a;">
          Selected: <strong>{{ value || '(none)' }}</strong>
        </p>
      </div>
    `,
  }),
};