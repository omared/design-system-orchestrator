import type { Meta, StoryObj } from '@storybook/angular';
import { ToastComponent } from './toast';

const meta: Meta<ToastComponent> = {
  title: 'Components/Toast',
  component: ToastComponent,
  tags: ['autodocs'],
  argTypes: {
    dismiss: { action: 'dismiss' },
  },
};

export default meta;
type Story = StoryObj<ToastComponent>;

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Information',
    message: 'This is an informational notification.',
    duration: 0, // No auto-dismiss en Storybook
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Success',
    message: 'Your changes have been saved successfully.',
    duration: 0,
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Warning',
    message: 'Please review your information before proceeding.',
    duration: 0,
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Error',
    message: 'An error occurred while processing your request.',
    duration: 0,
  },
};

export const NotDismissible: Story = {
  args: {
    variant: 'info',
    title: 'Cannot Dismiss',
    message: 'This notification cannot be manually dismissed.',
    dismissible: false,
    duration: 0,
  },
};

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; padding: 20px;">
        <ds-toast variant="info" title="Information" message="This is an info toast" [duration]="0"></ds-toast>
        <ds-toast variant="success" title="Success" message="Operation completed successfully" [duration]="0"></ds-toast>
        <ds-toast variant="warning" title="Warning" message="Please be careful" [duration]="0"></ds-toast>
        <ds-toast variant="error" title="Error" message="Something went wrong" [duration]="0"></ds-toast>
      </div>
    `,
  }),
};

export const Interactive: Story = {
  args: {
    variant: 'success',
    title: 'Dismissible Toast',
    message: 'Click the X to dismiss this notification.',
    dismissible: true,
    duration: 0,
  },
  render: (args) => ({
    props: {
      ...args,
      visible: true,
    },
    template: `
      <div>
        <ds-toast 
          *ngIf="visible"
          [variant]="variant"
          [title]="title"
          [message]="message"
          [dismissible]="dismissible"
          [duration]="duration"
          (dismiss)="visible = false">
        </ds-toast>
        
        <button 
          *ngIf="!visible"
          (click)="visible = true"
          style="padding: 8px 16px; background: #7a0cff; color: white; border: none; border-radius: 6px; cursor: pointer; margin-top: 20px;">
          Show Toast Again
        </button>
      </div>
    `,
  }),
};