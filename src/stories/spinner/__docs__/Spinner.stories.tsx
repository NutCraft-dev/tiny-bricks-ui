import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "../../../components/Spinner";
import React from "react";

const meta: Meta<typeof Spinner> = {
  title: "Spinner",
  component: Spinner,
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "select" },
    },
    color: {
      control: "color",
    },
    speed: {
      options: ["slow", "medium", "fast"],
      control: { type: "select" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Variants: Story = {
  render: (args) => (
    <div className="flex py-8 gap-4 justify-center items-center w-full h-full">
      <Spinner {...args} variant="circular" />
      <Spinner {...args} variant="pulsingDots" />
      <Spinner {...args} variant="wave" />
      <Spinner {...args} variant="ripple" />
      <Spinner {...args} variant="rotatingSquare" />
      <Spinner {...args} variant="bouncingBall" />
      <Spinner {...args} variant="rotatingDashedCircle" />
      <Spinner {...args} variant="pulsingRing" />
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex py-8 gap-4 justify-center items-center w-full h-full">
      <Spinner {...args} size="sm" />
      <Spinner {...args} size="md" />
      <Spinner {...args} size="lg" />
    </div>
  ),
};

export const Colors: Story = {
  render: (args) => (
    <div className="flex py-8 gap-4 justify-center items-center w-full h-full">
      <Spinner {...args} color="rgb(255, 99, 71)" />
      <Spinner {...args} color="rgb(50, 205, 50)" />
      <Spinner {...args} color="rgb(106, 90, 205)" />
      <Spinner {...args} color="rgb(255, 165, 0)" />
      <Spinner {...args} color="rgb(75, 0, 130)" />
      <Spinner {...args} color="rgb(220, 20, 60)" />
      <Spinner {...args} color="rgb(0, 191, 255)" />
      <Spinner {...args} color="rgb(148, 0, 211)" />
    </div>
  ),
};

export const Speeds: Story = {
  render: (args) => (
    <div className="flex py-8 gap-4 justify-center items-center w-full h-full">
      <Spinner {...args} speed="slow" />
      <Spinner {...args} speed="medium" />
      <Spinner {...args} speed="fast" />
    </div>
  ),
};
