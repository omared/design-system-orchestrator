import type { Meta, StoryObj } from '@storybook/angular';
import { AccordionComponent } from './accordion';

const meta: Meta<AccordionComponent> = {
  title: 'Components/Accordion',
  component: AccordionComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<AccordionComponent>;

const items = [
  {
    id: '1',
    title: 'What is a design system?',
    content: 'A design system is a collection of reusable components, guided by clear standards, that can be assembled together to build applications.',
    isOpen: false,
  },
  {
    id: '2',
    title: 'Why use design tokens?',
    content: 'Design tokens provide a single source of truth for design decisions like colors, spacing, and typography. They ensure consistency across platforms.',
    isOpen: false,
  },
  {
    id: '3',
    title: 'How does this system work?',
    content: 'Changes in Figma are exported as tokens, transformed by Style Dictionary, and automatically consumed by Angular and Storybook.',
    isOpen: false,
  },
];

export const Default: Story = {
  args: {
    items,
    allowMultiple: false,
  },
};

export const AllowMultiple: Story = {
  args: {
    items,
    allowMultiple: true,
  },
};

export const OneOpen: Story = {
  args: {
    items: [
      { ...items[0], isOpen: true },
      items[1],
      items[2],
    ],
    allowMultiple: false,
  },
};
