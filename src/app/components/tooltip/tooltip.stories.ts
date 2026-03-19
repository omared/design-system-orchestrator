import type { Meta, StoryObj } from '@storybook/angular';
import { TooltipComponent } from './tooltip';

const meta: Meta<TooltipComponent> = {
  title: 'Components/Tooltip',
  component: TooltipComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<TooltipComponent>;

export const Top: Story = {
  args: {
    text: 'This is a tooltip',
    position: 'top',
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 60px; text-align: center;">
        <ds-tooltip [text]="text" [position]="position">
          <button style="padding: 10px 20px; background: #7a0cff; color: white; border: none; border-radius: 6px; cursor: pointer;">
            Hover me (Top)
          </button>
        </ds-tooltip>
      </div>
    `,
  }),
};

export const Bottom: Story = {
  args: {
    text: 'Tooltip on bottom',
    position: 'bottom',
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 60px; text-align: center;">
        <ds-tooltip [text]="text" [position]="position">
          <button style="padding: 10px 20px; background: #7a0cff; color: white; border: none; border-radius: 6px; cursor: pointer;">
            Hover me (Bottom)
          </button>
        </ds-tooltip>
      </div>
    `,
  }),
};

export const Left: Story = {
  args: {
    text: 'Tooltip on left',
    position: 'left',
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 60px; text-align: center;">
        <ds-tooltip [text]="text" [position]="position">
          <button style="padding: 10px 20px; background: #7a0cff; color: white; border: none; border-radius: 6px; cursor: pointer;">
            Hover me (Left)
          </button>
        </ds-tooltip>
      </div>
    `,
  }),
};

export const Right: Story = {
  args: {
    text: 'Tooltip on right',
    position: 'right',
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 60px; text-align: center;">
        <ds-tooltip [text]="text" [position]="position">
          <button style="padding: 10px 20px; background: #7a0cff; color: white; border: none; border-radius: 6px; cursor: pointer;">
            Hover me (Right)
          </button>
        </ds-tooltip>
      </div>
    `,
  }),
};

export const AllPositions: Story = {
  render: () => ({
    template: `
      <div style="padding: 80px; display: flex; gap: 40px; justify-content: center; flex-wrap: wrap;">
        <ds-tooltip text="Top tooltip" position="top">
          <button style="padding: 10px 20px; background: #7a0cff; color: white; border: none; border-radius: 6px; cursor: pointer;">
            Top
          </button>
        </ds-tooltip>

        <ds-tooltip text="Bottom tooltip" position="bottom">
          <button style="padding: 10px 20px; background: #7a0cff; color: white; border: none; border-radius: 6px; cursor: pointer;">
            Bottom
          </button>
        </ds-tooltip>

        <ds-tooltip text="Left tooltip" position="left">
          <button style="padding: 10px 20px; background: #7a0cff; color: white; border: none; border-radius: 6px; cursor: pointer;">
            Left
          </button>
        </ds-tooltip>

        <ds-tooltip text="Right tooltip" position="right">
          <button style="padding: 10px 20px; background: #7a0cff; color: white; border: none; border-radius: 6px; cursor: pointer;">
            Right
          </button>
        </ds-tooltip>
      </div>
    `,
  }),
};
