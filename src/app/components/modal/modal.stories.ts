import type { Meta, StoryObj } from '@storybook/angular';
import { ModalComponent } from './modal';

const meta: Meta<ModalComponent> = {
  title: 'Components/Modal',
  component: ModalComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ModalComponent>;

export const Default: Story = {
  args: {
    isOpen: true,
    title: 'Modal Title',
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template: `
      <ds-modal [isOpen]="isOpen" [title]="title" [size]="size">
        <p>This is the modal content. You can put any content here.</p>
        <p style="margin-top: 12px;">In a real app, you would control isOpen with a button.</p>

        <div footer style="display: flex; gap: 12px;">
          <button style="padding: 8px 16px; background: #e3e3e4; border: none; border-radius: 6px; cursor: pointer;">
            Cancel
          </button>
          <button style="padding: 8px 16px; background: #7a0cff; color: white; border: none; border-radius: 6px; cursor: pointer;">
            Confirm
          </button>
        </div>
      </ds-modal>
    `,
  }),
};

export const Small: Story = {
  args: {
    isOpen: true,
    title: 'Small Modal',
    size: 'sm',
  },
  render: (args) => ({
    props: args,
    template: `
      <ds-modal [isOpen]="isOpen" [title]="title" [size]="size">
        <p>This is a small modal with less width.</p>

        <div footer style="display: flex; gap: 12px;">
          <button style="padding: 8px 16px; background: #7a0cff; color: white; border: none; border-radius: 6px; cursor: pointer;">
            OK
          </button>
        </div>
      </ds-modal>
    `,
  }),
};

export const Large: Story = {
  args: {
    isOpen: true,
    title: 'Large Modal',
    size: 'lg',
  },
  render: (args) => ({
    props: args,
    template: `
      <ds-modal [isOpen]="isOpen" [title]="title" [size]="size">
        <p>This is a large modal with more width for complex content.</p>
        <p style="margin-top: 12px;">It can hold forms, tables, or detailed information.</p>

        <div footer style="display: flex; gap: 12px;">
          <button style="padding: 8px 16px; background: #e3e3e4; border: none; border-radius: 6px; cursor: pointer;">
            Cancel
          </button>
          <button style="padding: 8px 16px; background: #7a0cff; color: white; border: none; border-radius: 6px; cursor: pointer;">
            Save
          </button>
        </div>
      </ds-modal>
    `,
  }),
};

export const WithLongContent: Story = {
  args: {
    isOpen: true,
    title: 'Scrollable Content',
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template: `
      <ds-modal [isOpen]="isOpen" [title]="title" [size]="size">
        <p>This modal has a lot of content to demonstrate scrolling.</p>
        <p style="margin-top: 12px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p style="margin-top: 12px;">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p style="margin-top: 12px;">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
        <p style="margin-top: 12px;">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
        <p style="margin-top: 12px;">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.</p>
        <p style="margin-top: 12px;">Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
        <p style="margin-top: 12px;">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.</p>

        <div footer style="display: flex; gap: 12px;">
          <button style="padding: 8px 16px; background: #7a0cff; color: white; border: none; border-radius: 6px; cursor: pointer;">
            Close
          </button>
        </div>
      </ds-modal>
    `,
  }),
};
