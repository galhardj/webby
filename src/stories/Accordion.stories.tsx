"use client";

import type { Meta, StoryObj } from "@storybook/react";
import Accordion from "@/src/components/common/Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: {
      control: "text",
      description: "The title of the accordion section",
    },
    accordions: {
      description: "Array of accordion items with id, summary, and description",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

const defaultAccordions = [
  {
    id: 1,
    summary: "What is React?",
    description:
      "React is a JavaScript library for building user interfaces with reusable components.",
  },
  {
    id: 2,
    summary: "What is Storybook?",
    description:
      "Storybook is a development environment for UI components. It allows you to develop and test components in isolation.",
  },
  {
    id: 3,
    summary: "How do I use Accordion?",
    description:
      "The Accordion component helps you organize content in collapsible sections. It manages state internally and provides smooth toggling between open and closed states.",
  },
];

export const Default: Story = {
  args: {
    title: "Frequently Asked Questions",
    accordions: defaultAccordions,
  },
};

export const WithoutTitle: Story = {
  args: {
    accordions: defaultAccordions,
  },
};

export const SingleItem: Story = {
  args: {
    title: "FAQ",
    accordions: [
      {
        id: 1,
        summary: "What is this?",
        description: "This is a single accordion item for demonstration.",
      },
    ],
  },
  argTypes: {
    title: {
      control: false,
    },
  },
};

export const ManyItems: Story = {
  args: {
    title: "Comprehensive FAQ",
    accordions: [
      {
        id: 1,
        summary: "Getting Started",
        description:
          "Learn the basics of how to use this accordion component in your projects.",
      },
      {
        id: 2,
        summary: "Installation",
        description:
          "Follow these steps to install and integrate the component into your application.",
      },
      {
        id: 3,
        summary: "Configuration",
        description:
          "Customize the accordion behavior and appearance using available props.",
      },
      {
        id: 4,
        summary: "Advanced Usage",
        description:
          "Explore advanced features and techniques for extending the component.",
      },
      {
        id: 5,
        summary: "Troubleshooting",
        description:
          "Find solutions to common issues and frequently encountered problems.",
      },
      {
        id: 6,
        summary: "Best Practices",
        description:
          "Follow recommended practices for optimal performance and user experience.",
      },
    ],
  },
};

export const LongContent: Story = {
  args: {
    title: "Documentation",
    accordions: [
      {
        id: 1,
        summary: "Component Architecture",
        description: `This accordion component is built using React hooks and follows modern best practices. 
        The component manages its own state internally using the useState hook, allowing each accordion item 
        to be opened or closed independently. The component is fully accessible and supports keyboard navigation.
        
        Key features include:
        - Smooth transitions and animations
        - Responsive design
        - Accessibility support (WCAG compliant)
        - TypeScript support
        - Zero external dependencies beyond React`,
      },
      {
        id: 2,
        summary: "Props Reference",
        description: `The Accordion component accepts the following props:
        
        - title (optional): string - The heading displayed above the accordion items
        - accordions: AccordionItem[] - Array of items with id, summary, and description
        
        AccordionItem type:
        - id: number - Unique identifier for the item
        - summary: string - The clickable heading text
        - description: string - The content shown when expanded`,
      },
    ],
  },
};
