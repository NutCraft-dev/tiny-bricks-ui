import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "../../../components/Typography";
import React from "react";

const meta: Meta<typeof Typography> = {
  title: "Typography",
  component: Typography,
  argTypes: {
    align: {
      control: "radio",
      options: ["left", "center", "right", "justify"],
    },
    disabled: {
      control: "boolean",
    },
    underline: {
      control: "boolean",
    },
    strong: {
      control: "boolean",
    },
    italic: {
      control: "boolean",
    },
    strikethrough: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-col w-fit border border-gray-400 rounded-lg gap-4 p-8">
      <Typography.Heading element="h1" {...args}>
        Heading 1
      </Typography.Heading>
      <Typography.Heading element="h2" {...args}>
        Heading 2
      </Typography.Heading>
      <Typography.Heading element="h3" {...args}>
        Heading 3
      </Typography.Heading>
      <Typography.Heading element="h4" {...args}>
        Heading 4
      </Typography.Heading>
      <Typography.Heading element="h5" {...args}>
        Heading 5
      </Typography.Heading>
      <Typography.Heading element="h6" {...args}>
        Heading 6
      </Typography.Heading>
      <Typography.Text {...args}>
        This is a regular body text paragraph. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
      </Typography.Text>
      <Typography.Code {...args}>// This is a code block.</Typography.Code>
    </div>
  ),
};

export const CustomSizes: Story = {
  render: (args) => (
    <div className="flex flex-col w-fit border border-gray-400 rounded-lg gap-4 p-8">
      {[10, 8, 6, 4, 2].map((size) => (
        <Typography.Text key={size} {...args} size={size}>
          Text with size {size}
        </Typography.Text>
      ))}
      <Typography.Heading element="h2" {...args} size={4}>
        Heading with size 4
      </Typography.Heading>
    </div>
  ),
};

export const ColorVariations: Story = {
  render: (args) => (
    <div className="flex flex-col w-fit border border-gray-400 rounded-lg gap-4 p-8">
      <Typography.Heading element="h3" {...args} color="#1a73e8">
        Primary Color Heading
      </Typography.Heading>
      <Typography.Text {...args} color="#34a853">
        Success Text
      </Typography.Text>
      <Typography.Text {...args} color="#ea4335">
        Error Text
      </Typography.Text>
      <Typography.Text {...args} color="#fbbc05">
        Warning Text
      </Typography.Text>
    </div>
  ),
};

export const Alignment: Story = {
  render: (args) => (
    <div className="flex flex-col w-fit border border-gray-400 rounded-lg gap-4 p-8">
      <Typography.Text {...args} align="left">
        Left aligned text
      </Typography.Text>
      <Typography.Text {...args} align="center">
        Center aligned text
      </Typography.Text>
      <Typography.Text {...args} align="right">
        Right aligned text
      </Typography.Text>
      <Typography.Text {...args} align="justify">
        Justified text that spans multiple lines. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
      </Typography.Text>
    </div>
  ),
};

export const Decorations: Story = {
  render: (args) => (
    <div className="flex flex-col w-fit border border-gray-400 rounded-lg gap-4 p-8">
      <Typography.Text {...args} underline>
        Underlined text
      </Typography.Text>
      <Typography.Text {...args} strong>
        Strong text
      </Typography.Text>
      <Typography.Text {...args} italic>
        Italic text
      </Typography.Text>
      <Typography.Text {...args} strikethrough>
        Strikethrough text
      </Typography.Text>
    </div>
  ),
};

export const Combined: Story = {
  render: (args) => (
    <div className="flex flex-col w-fit border border-gray-400 rounded-lg gap-4 p-8">
      <Typography.Text {...args} strong italic>
        Strong and italic text
      </Typography.Text>
      <Typography.Text {...args} underline strikethrough>
        Underlined and strikethrough text
      </Typography.Text>
      <Typography.Heading {...args} strong align="center">
        Centered strong heading
      </Typography.Heading>
    </div>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <div className="flex flex-col w-fit border border-gray-400 rounded-lg gap-4 p-8">
      <Typography.Heading {...args} disabled>
        Disabled heading
      </Typography.Heading>
      <Typography.Text {...args} disabled>
        Disabled body text
      </Typography.Text>
    </div>
  ),
};

export const CopyFeature: Story = {
  render: (args) => (
    <div className="flex flex-col w-fit border border-gray-400 rounded-lg gap-4 p-8">
      <Typography.Text {...args} copy>
        This text has a copy button
      </Typography.Text>
      <Typography.Code {...args} copy>
        const greeting = "Hello, World!";
      </Typography.Code>
    </div>
  ),
};
