import type { Meta, StoryObj } from "@storybook/react";
import Divider from "../../../components/Divider/divider";
import React from "react";

const meta: Meta<typeof Divider> = {
  title: "Divider",
  component: Divider,
  argTypes: {
    type: {
      options: ["horizontal", "vertical", "inline"],
      control: { type: "radio" },
    },
    thickness: {
      options: ["thin", "medium", "thick"],
      control: { type: "radio" },
    },
    spacing: {
      options: ["none", "small", "medium", "large"],
      control: { type: "radio" },
    },
    textPosition: {
      options: ["none", "left", "center", "right"],
      control: { type: "radio" },
    },
    variant: {
      options: ["solid", "dashed", "dotted"],
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Types: Story = {
  render: (args) => (
    <>
      <div className="py-2 text-sm">
        Text
        <Divider {...args} type="inline" />
        More Text
      </div>
      <div className="flex flex-col p-4 border border-gray-500 rounded-lg">
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          voluptates nesciunt. Obcaecati odit ullam aspernatur consequuntur esse
          officiis sunt, non deleniti, quos repellat possimus accusamus velit
          quibusdam facere nostrum ipsum porro pariatur dolore voluptatibus modi
          eius minus. Quisquam, nulla aperiam ex autem reiciendis ab, eum odio
          ipsa, beatae reprehenderit temporibus?
        </p>
        <Divider {...args} type="horizontal" />
        <div className="flex gap-4 justify-center">
          <p className="text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
            vel repellendus, cum doloribus hic omnis eveniet vitae soluta magni.
            Quisquam, ab. Explicabo ad minus officiis!
          </p>
          <Divider {...args} type="vertical" />
          <p className="text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
            accusamus nesciunt cumque autem doloremque enim nostrum odit illo
            assumenda! Enim eum dicta eaque culpa dolorem.
          </p>
        </div>
      </div>
    </>
  ),
};

export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-col p-4">
      <p className="text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
        voluptates nesciunt. Obcaecati odit ullam aspernatur consequuntur esse
        officiis sunt, non deleniti, quos repellat possimus accusamus velit
        quibusdam facere nostrum ipsum porro pariatur dolore voluptatibus modi
        eius minus. Quisquam, nulla aperiam ex autem reiciendis ab, eum odio
        ipsa, beatae reprehenderit temporibus?
      </p>
      <Divider {...args} variant="solid" />
      <p className="text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
        voluptates nesciunt. Obcaecati odit ullam aspernatur consequuntur esse
        officiis sunt, non deleniti, quos repellat possimus accusamus velit
        quibusdam facere nostrum ipsum porro pariatur dolore voluptatibus modi
        eius minus. Quisquam, nulla aperiam ex autem reiciendis ab, eum odio
        ipsa, beatae reprehenderit temporibus?
      </p>
      <Divider {...args} variant="dashed" />
      <p className="text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
        voluptates nesciunt. Obcaecati odit ullam aspernatur consequuntur esse
        officiis sunt, non deleniti, quos repellat possimus accusamus velit
        quibusdam facere nostrum ipsum porro pariatur dolore voluptatibus modi
        eius minus. Quisquam, nulla aperiam ex autem reiciendis ab, eum odio
        ipsa, beatae reprehenderit temporibus?
      </p>
      <Divider {...args} variant="dotted" />
    </div>
  ),
};

export const CustomColors: Story = {
  render: (args) => (
    <div className="flex flex-col p-4">
      <Divider {...args} customColor="#2d00bF" />
      <p className="text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
        voluptates nesciunt. Obcaecati odit ullam aspernatur consequuntur esse
        officiis sunt, non deleniti, quos repellat possimus accusamus velit
        quibusdam facere nostrum ipsum porro pariatur dolore voluptatibus modi
        eius minus. Quisquam, nulla aperiam ex autem reiciendis ab, eum odio
        ipsa, beatae reprehenderit temporibus?
      </p>
      <Divider {...args} customColor="rgb(255, 162, 0)" />
      <p className="text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
        voluptates nesciunt. Obcaecati odit ullam aspernatur consequuntur esse
        officiis sunt, non deleniti, quos repellat possimus accusamus velit
        quibusdam facere nostrum ipsum porro pariatur dolore voluptatibus modi
        eius minus. Quisquam, nulla aperiam ex autem reiciendis ab, eum odio
        ipsa, beatae reprehenderit temporibus?
      </p>
      <Divider {...args} customColor="hsla(255, 100%, 50%, 0.1)" />
    </div>
  ),
};

export const Thickness: Story = {
  render: (args) => (
    <div className="flex flex-col p-4">
      <Divider {...args} thickness="thin" />
      <p className="text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
        voluptates nesciunt. Obcaecati odit ullam aspernatur consequuntur esse
        officiis sunt, non deleniti, quos repellat possimus accusamus velit
        quibusdam facere nostrum ipsum porro pariatur dolore voluptatibus modi
        eius minus. Quisquam, nulla aperiam ex autem reiciendis ab, eum odio
        ipsa, beatae reprehenderit temporibus?
      </p>
      <Divider {...args} thickness="medium" />
      <p className="text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
        voluptates nesciunt. Obcaecati odit ullam aspernatur consequuntur esse
        officiis sunt, non deleniti, quos repellat possimus accusamus velit
        quibusdam facere nostrum ipsum porro pariatur dolore voluptatibus modi
        eius minus. Quisquam, nulla aperiam ex autem reiciendis ab, eum odio
        ipsa, beatae reprehenderit temporibus?
      </p>
      <Divider {...args} thickness="thick" />
      <p className="text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
        voluptates nesciunt. Obcaecati odit ullam aspernatur consequuntur esse
        officiis sunt, non deleniti, quos repellat possimus accusamus velit
        quibusdam facere nostrum ipsum porro pariatur dolore voluptatibus modi
        eius minus. Quisquam, nulla aperiam ex autem reiciendis ab, eum odio
        ipsa, beatae reprehenderit temporibus?
      </p>
    </div>
  ),
};

export const WithText: Story = {
  render: (args) => (
    <div className="flex flex-col p-4">
      <Divider {...args} textPosition="left">
        Left Text
      </Divider>
      <p className="text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
        voluptates nesciunt. Obcaecati odit ullam aspernatur consequuntur esse
        officiis sunt, non deleniti, quos repellat possimus accusamus velit
        quibusdam facere nostrum ipsum porro pariatur dolore voluptatibus modi
        eius minus. Quisquam, nulla aperiam ex autem reiciendis ab, eum odio
        ipsa, beatae reprehenderit temporibus?
      </p>
      <Divider {...args} textPosition="center">
        Center Text
      </Divider>
      <p className="text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
        voluptates nesciunt. Obcaecati odit ullam aspernatur consequuntur esse
        officiis sunt, non deleniti, quos repellat possimus accusamus velit
        quibusdam facere nostrum ipsum porro pariatur dolore voluptatibus modi
        eius minus. Quisquam, nulla aperiam ex autem reiciendis ab, eum odio
        ipsa, beatae reprehenderit temporibus?
      </p>
      <Divider {...args} textPosition="right">
        Right Text
      </Divider>
      <p className="text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
        voluptates nesciunt. Obcaecati odit ullam aspernatur consequuntur esse
        officiis sunt, non deleniti, quos repellat possimus accusamus velit
        quibusdam facere nostrum ipsum porro pariatur dolore voluptatibus modi
        eius minus. Quisquam, nulla aperiam ex autem reiciendis ab, eum odio
        ipsa, beatae reprehenderit temporibus?
      </p>
    </div>
  ),
};

export const WithTextMargin: Story = {
  render: (args) => (
    <div className="flex flex-col p-4">
      <Divider {...args} textPosition="left" textMargin={50}>
        Left Text with 50px margin
      </Divider>
      <p className="text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
        voluptates nesciunt. Obcaecati odit ullam aspernatur consequuntur esse
        officiis sunt, non deleniti, quos repellat possimus accusamus velit
        quibusdam facere nostrum ipsum porro pariatur dolore voluptatibus modi
        eius minus. Quisquam, nulla aperiam ex autem reiciendis ab, eum odio
        ipsa, beatae reprehenderit temporibus?
      </p>
      <Divider {...args} textPosition="right" textMargin={0}>
        Right Text with no margin
      </Divider>
      <p className="text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
        voluptates nesciunt. Obcaecati odit ullam aspernatur consequuntur esse
        officiis sunt, non deleniti, quos repellat possimus accusamus velit
        quibusdam facere nostrum ipsum porro pariatur dolore voluptatibus modi
        eius minus. Quisquam, nulla aperiam ex autem reiciendis ab, eum odio
        ipsa, beatae reprehenderit temporibus?
      </p>
    </div>
  ),
};
