import type { Meta, StoryObj } from '@storybook/angular';
import { TabsComponent } from './tabs';

const meta: Meta<TabsComponent> = {
  title: 'Components/Tabs',
  component: TabsComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<TabsComponent>;

const tabs = [
  { id: 'tab1', label: 'Overview' },
  { id: 'tab2', label: 'Details' },
  { id: 'tab3', label: 'Settings' },
];

export const Line: Story = {
  args: {
    tabs,
    variant: 'line',
  },
  render: (args) => ({
    props: args,
    template: `
      <ds-tabs [tabs]="tabs" [variant]="variant">
        <div style="padding: 20px; background: #f8fafc; border-radius: 8px;">
          Tab content goes here. Click different tabs to switch.
        </div>
      </ds-tabs>
    `,
  }),
};

export const Pill: Story = {
  args: {
    tabs,
    variant: 'pill',
  },
  render: (args) => ({
    props: args,
    template: `
      <ds-tabs [tabs]="tabs" [variant]="variant">
        <div style="padding: 20px; background: #f8fafc; border-radius: 8px;">
          Pill variant with rounded tabs.
        </div>
      </ds-tabs>
    `,
  }),
};

export const WithDisabled: Story = {
  args: {
    tabs: [
      { id: 'tab1', label: 'Overview' },
      { id: 'tab2', label: 'Details', disabled: true },
      { id: 'tab3', label: 'Settings' },
    ],
    variant: 'line',
  },
  render: (args) => ({
    props: args,
    template: `
      <ds-tabs [tabs]="tabs" [variant]="variant">
        <div style="padding: 20px; background: #f8fafc; border-radius: 8px;">
          The "Details" tab is disabled.
        </div>
      </ds-tabs>
    `,
  }),
};
