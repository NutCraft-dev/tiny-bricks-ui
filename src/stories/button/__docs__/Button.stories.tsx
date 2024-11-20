import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../../components/Button";
import { SettingFilled } from "@ant-design/icons";
import React from "react";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  args: {
    onClick: () => console.log("Button"),
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["filled", "outline", "dashed", "soft", "ghost", "link"],
    },
    disabled: {
      control: "boolean",
    },
    size: {
      control: "radio",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    shadow: {
      control: "radio",
      options: ["none", "small", "large"],
    },
    shape: {
      control: "radio",
      options: ["square", "rounded", "pill"],
    },
    customColor: {
      control: "color",
    },
    loading: {
      control: "boolean",
    },
    onClick: {
      action: "clicked",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Variants: Story = {
  render: (args) => (
    <div className="flex py-8 gap-4 justify-center items-center w-full h-full">
      <Button {...args} variant={{ initial: "filled", md: "outline" }}>
        Button
      </Button>
      <Button {...args} variant="outline">
        Button
      </Button>
      <Button {...args} variant="dashed">
        Button
      </Button>
      <Button {...args} variant="soft">
        Button
      </Button>
      <Button {...args} variant="ghost">
        Button
      </Button>
      <Button {...args} variant="link">
        Button
      </Button>
    </div>
  ),
};
export const Sizes: Story = {
  render: (args) => (
    <div className="flex py-8 gap-4 justify-center items-center w-full h-full">
      <Button {...args} size="xs">
        Button
      </Button>
      <Button {...args} size="sm">
        Button
      </Button>
      <Button {...args} size="md">
        Button
      </Button>
      <Button {...args} size="lg">
        Button
      </Button>
      <Button {...args} size="xl">
        Button
      </Button>
    </div>
  ),
};
export const Shadows: Story = {
  render: (args) => (
    <div className="flex py-8 gap-4 justify-center items-center w-full h-full">
      <Button {...args} shadow="none">
        Button
      </Button>
      <Button {...args} shadow="small">
        Button
      </Button>
      <Button {...args} shadow="large">
        Button
      </Button>
    </div>
  ),
};
export const Shapes: Story = {
  render: (args) => (
    <div className="flex py-8 gap-4 justify-center items-center w-full h-full">
      <Button {...args} shape="square">
        Button
      </Button>
      <Button {...args} shape="rounded">
        Button
      </Button>
      <Button {...args} shape="pill">
        Button
      </Button>
    </div>
  ),
};
export const CustomColors: Story = {
  render: (args) => (
    <div className="flex py-8 gap-4 justify-center items-center w-full h-full">
      <Button {...args} customColor="rgb(255, 99, 71)">
        Button
      </Button>
      <Button {...args} customColor="rgb(255, 165, 0)">
        Button
      </Button>
      <Button {...args} customColor="rgb(255, 215, 0)">
        Button
      </Button>
      <Button {...args} customColor="rgb(124, 252, 0)">
        Button
      </Button>
    </div>
  ),
};
export const Loading: Story = {
  render: (args) => (
    <div className="flex py-8 gap-4 justify-center items-center w-full h-full">
      <Button {...args} variant="filled" loading>
        Button
      </Button>
      <Button {...args} variant="outline" loading>
        Button
      </Button>
      <Button {...args} variant="soft" loading>
        Button
      </Button>
      <Button {...args} variant="dashed" loading>
        Button
      </Button>
      <Button {...args} variant="ghost" loading>
        Button
      </Button>
      <Button {...args} variant="link" loading>
        Button
      </Button>
    </div>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <div className="flex py-8 gap-4 justify-center items-center w-full h-full">
      <Button {...args} variant="filled" disabled>
        Button
      </Button>
      <Button {...args} variant="outline" disabled>
        Button
      </Button>
      <Button {...args} variant="soft" disabled>
        Button
      </Button>
      <Button {...args} variant="dashed" disabled>
        Button
      </Button>
      <Button {...args} variant="ghost" disabled>
        Button
      </Button>
      <Button {...args} variant="link" disabled>
        Button
      </Button>
    </div>
  ),
};

export const Icon: Story = {
  render: (args) => (
    <>
      <div className="flex py-8 gap-4 justify-center items-center w-full h-full">
        <Button {...args} variant="filled" icon={<SettingFilled />} iconOnly />
        <Button {...args} variant="outline" icon={<SettingFilled />} iconOnly />
        <Button {...args} variant="soft" icon={<SettingFilled />} iconOnly />
        <Button {...args} variant="dashed" icon={<SettingFilled />} iconOnly />
        <Button {...args} variant="ghost" icon={<SettingFilled />} iconOnly />
        <Button {...args} variant="link" icon={<SettingFilled />} iconOnly />
      </div>
      <div className="flex py-8 gap-4 justify-center items-center w-full h-full">
        <Button
          {...args}
          variant="filled"
          icon={<SettingFilled />}
          iconPosition="start"
        >
          Button
        </Button>
        <Button
          {...args}
          variant="outline"
          icon={<SettingFilled />}
          iconPosition="start"
        >
          Button
        </Button>
        <Button
          {...args}
          variant="soft"
          icon={<SettingFilled />}
          iconPosition="start"
        >
          Button
        </Button>
        <Button
          {...args}
          variant="dashed"
          icon={<SettingFilled />}
          iconPosition="start"
        >
          Button
        </Button>
        <Button
          {...args}
          variant="ghost"
          icon={<SettingFilled />}
          iconPosition="start"
        >
          Button
        </Button>
        <Button
          {...args}
          variant="link"
          icon={<SettingFilled />}
          iconPosition="start"
        >
          Button
        </Button>
      </div>
      <div className="flex py-8 gap-4 justify-center items-center w-full h-full">
        <Button
          {...args}
          variant="filled"
          icon={<SettingFilled />}
          iconPosition="end"
        >
          Button
        </Button>
        <Button
          {...args}
          variant="outline"
          icon={<SettingFilled />}
          iconPosition="end"
        >
          Button
        </Button>
        <Button
          {...args}
          variant="soft"
          icon={<SettingFilled />}
          iconPosition="end"
        >
          Button
        </Button>
        <Button
          {...args}
          variant="dashed"
          icon={<SettingFilled />}
          iconPosition="end"
        >
          Button
        </Button>
        <Button
          {...args}
          variant="ghost"
          icon={<SettingFilled />}
          iconPosition="end"
        >
          Button
        </Button>
        <Button
          {...args}
          variant="link"
          icon={<SettingFilled />}
          iconPosition="end"
        >
          Button
        </Button>
      </div>
    </>
  ),
};

export const Animate: Story = {
  render: (args) => (
    <div className="flex py-8 gap-4 justify-center items-center w-full h-full">
      <Button {...args} animate="ripple">
        Button
      </Button>
      <Button {...args} animate="none">
        Button
      </Button>
      <Button {...args} animate="wave">
        Button
      </Button>
    </div>
  ),
};
