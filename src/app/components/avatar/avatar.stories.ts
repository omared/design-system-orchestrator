import type { Meta, StoryObj } from '@storybook/angular';
import { AvatarComponent } from './avatar';

const meta: Meta<AvatarComponent> = {
  title: 'Components/Avatar',
  component: AvatarComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<AvatarComponent>;

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=12',
    alt: 'John Doe',
    size: 'md',
  },
};

export const WithInitials: Story = {
  args: {
    initials: 'JD',
    size: 'md',
  },
};

export const Fallback: Story = {
  args: {
    size: 'md',
  },
};

export const Sizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center;">
        <ds-avatar size="xs" initials="XS"></ds-avatar>
        <ds-avatar size="sm" initials="SM"></ds-avatar>
        <ds-avatar size="md" initials="MD"></ds-avatar>
        <ds-avatar size="lg" initials="LG"></ds-avatar>
        <ds-avatar size="xl" initials="XL"></ds-avatar>
      </div>
    `,
  }),
};
