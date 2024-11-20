import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "../../../components/Skeleton";
import React from "react";

const meta: Meta<typeof Skeleton> = {
  title: "Skeleton",
  component: Skeleton,
  argTypes: {
    width: {
      control: "text",
    },
    height: {
      control: "text",
    },
    variant: {
      options: ["line", "rounded", "rectangular", "circle"],
      control: { type: "radio" },
    },
    theme: {
      options: ["light", "dark"],
      control: { type: "radio" },
    },
    animate: {
      control: "boolean",
      defaultValue: true,
    },
    rows: {
      control: "number",
      defaultValue: 1,
    },
    circleSize: {
      control: "text",
    },
    media: {
      options: ["none", "image", "video"],
      control: { type: "radio" },
      defaultValue: "none",
    },
    customColor: {
      control: "color",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  render: (args) => (
    <div>
      <Skeleton {...args} />
    </div>
  ),
};

export const AvatarWithText: Story = {
  render: (args) => (
    <div>
      <Skeleton {...args} avatar circleSize={64} />
    </div>
  ),
};

export const MultilineText: Story = {
  render: (args) => (
    <div>
      <Skeleton {...args} para rows={5} />
    </div>
  ),
};

export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <Skeleton {...args} variant="line" />
      <Skeleton {...args} variant="rounded" width={200} height={100} />
      <Skeleton {...args} variant="rectangular" width={200} height={100} />
      <Skeleton {...args} variant="circle" circleSize={80} />
    </div>
  ),
};

export const ThemeVariants: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <div className="p-4">
        <Skeleton {...args} theme="light" />
      </div>
      <div className="p-4 bg-gray-900">
        <Skeleton {...args} theme="dark" />
      </div>
    </div>
  ),
};

export const MediaPlaceholders: Story = {
  render: (args) => (
    <div className="flex justify-center items-center w-full gap-4">
      <Skeleton {...args} variant="circle" circleSize={200} media="image" />
      <Skeleton
        {...args}
        variant="rounded"
        width={200}
        height={150}
        media="video"
      />
    </div>
  ),
};

export const CustomStyles: Story = {
  render: (args) => (
    <div>
      <Skeleton
        {...args}
        customColor="#6366f1"
        borderRadius={16}
        width={400}
        height={150}
        variant="rectangular"
      />
    </div>
  ),
};
