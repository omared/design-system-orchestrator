
import type { Meta, StoryObj } from '@storybook/angular';
import { AlertComponent } from './alert';

const meta: Meta<AlertComponent> = {
  title: 'Components/Alert',
  component: AlertComponent,
  tags: ['autodocs'],
  argTypes: {
    dismiss: { action: 'dismiss' },
  },
};

export default meta;
type Story = StoryObj<AlertComponent>;

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Information',
  },
  render: (args) => ({
    props: args,
    template: `
      <ds-alert [variant]="variant" [title]="title">
        This is an informational message for the user.
      </ds-alert>
    `,
  }),
};

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Success',
  },
  render: (args) => ({
    props: args,
    template: `
      <ds-alert [variant]="variant" [title]="title">
        Your changes have been saved successfully.
      </ds-alert>
    `,
  }),
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Warning',
  },
  render: (args) => ({
    props: args,
    template: `
      <ds-alert [variant]="variant" [title]="title">
        Please review your information before proceeding.
      </ds-alert>
    `,
  }),
};

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Error',
  },
  render: (args) => ({
    props: args,
    template: `
      <ds-alert [variant]="variant" [title]="title">
        An error occurred while processing your request.
      </ds-alert>
    `,
  }),
};

export const Dismissible: Story = {
  args: {
    variant: 'info',
    title: 'Dismissible Alert',
    dismissible: true,
  },
  render: (args) => ({
    props: {
      ...args,
      visible: true,
    },
    template: `
      <div>
        <ds-alert 
          *ngIf="visible"
          [variant]="variant" 
          [title]="title" 
          [dismissible]="dismissible"
          (dismiss)="visible = false">
          You can close this alert by clicking the X button.
        </ds-alert>
        
        <button 
          *ngIf="!visible"
          (click)="visible = true"
          style="padding: 8px 16px; background: #7a0cff; color: white; border: none; border-radius: 6px; cursor: pointer;">
          Show Alert Again
        </button>
      </div>
    `,
  }),
};

export const WithoutTitle: Story = {
  args: {
    variant: 'success',
  },
  render: (args) => ({
    props: args,
    template: `
      <ds-alert [variant]="variant">
        Simple message without a title.
      </ds-alert>
    `,
  }),
};