import type { Meta, StoryObj } from '@storybook/angular';
import { SkeletonComponent } from './skeleton';

const meta: Meta<SkeletonComponent> = {
  title: 'Components/Skeleton',
  component: SkeletonComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['text', 'rect', 'circle'] },
    width: { control: 'text' },
    height: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj<SkeletonComponent>;

export const Text: Story = {
  args: { variant: 'text', width: '200px', height: '14px' },
};

export const Rect: Story = {
  args: { variant: 'rect', width: '300px', height: '80px' },
};

export const Circle: Story = {
  args: { variant: 'circle', width: '48px', height: '48px' },
};

export const CardSkeleton: Story = {
  render: () => ({
    template: `
      <div style="display:flex; flex-direction:column; gap:12px; padding:24px; background:#fff; border-radius:16px; width:300px; box-shadow:0 4px 12px rgba(0,0,0,.08)">
        <ds-skeleton variant="rect" width="100%" height="120px"></ds-skeleton>
        <ds-skeleton variant="text" width="60%" height="14px"></ds-skeleton>
        <ds-skeleton variant="text" width="90%" height="14px"></ds-skeleton>
        <ds-skeleton variant="text" width="40%" height="14px"></ds-skeleton>
      </div>
    `,
    imports: [SkeletonComponent],
  }),
};

export const DashboardSkeleton: Story = {
  render: () => ({
    template: `
      <div style="display:flex; flex-direction:column; gap:16px; padding:24px; background:#f8f8f8; max-width:480px">
        <ds-skeleton variant="rect" width="100%" height="160px"></ds-skeleton>
        <div style="display:flex; gap:12px;">
          <ds-skeleton variant="rect" width="140px" height="80px"></ds-skeleton>
          <ds-skeleton variant="rect" width="140px" height="80px"></ds-skeleton>
          <ds-skeleton variant="rect" width="140px" height="80px"></ds-skeleton>
        </div>
        <ds-skeleton variant="text" width="40%" height="18px"></ds-skeleton>
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:12px;">
          <ds-skeleton variant="rect" width="100%" height="100px"></ds-skeleton>
          <ds-skeleton variant="rect" width="100%" height="100px"></ds-skeleton>
          <ds-skeleton variant="rect" width="100%" height="100px"></ds-skeleton>
          <ds-skeleton variant="rect" width="100%" height="100px"></ds-skeleton>
        </div>
      </div>
    `,
    imports: [SkeletonComponent],
  }),
};
