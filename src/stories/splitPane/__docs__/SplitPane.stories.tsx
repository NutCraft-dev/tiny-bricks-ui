import type { Meta, StoryObj } from "@storybook/react";
import { SplitPane } from "../../../components/SplitPane";
import React from "react";

const meta: Meta<typeof SplitPane> = {
  title: "SplitPane",
  component: SplitPane,
  argTypes: {
    orientation: {
      control: { type: "radio" },
      options: ["horizontal", "vertical"],
    },
    minBlockSize: {
      control: { type: "number" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SplitPane>;

export const Layout: Story = {
  render: (args) => (
    <div className="w-full h-[50svh] border">
      <SplitPane {...args}>
        <SplitPane.Panel>
          <div className="flex items-center justify-center h-full">Panel 1</div>
        </SplitPane.Panel>
        <SplitPane.Panel>
          <div className="flex items-center justify-center h-full">Panel 2</div>
        </SplitPane.Panel>

        <SplitPane orientation="vertical" minBlockSize={150}>
          <SplitPane.Panel>
            <div className="flex items-center justify-center h-full">
              Panel 3
            </div>
          </SplitPane.Panel>
          <SplitPane.Panel>
            <div className="flex items-center justify-center h-full">
              Panel 4
            </div>
          </SplitPane.Panel>
        </SplitPane>
      </SplitPane>
    </div>
  ),
};
