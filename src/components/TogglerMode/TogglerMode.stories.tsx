import React from "react";
import { Meta, Story } from "@storybook/react";
import { TogglerMode, Props } from "./TogglerMode";

export default {
  title: "component/ToggleMode",
  component: TogglerMode,
  argTypes: {
    btnSize: {
      control: {
        type: "radio",
        options: ["small", "medium", "large"],
      },
    },
  },
} as Meta;

const Template: Story<Props> = (args) => <TogglerMode {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  modes: ["first", "second"],
  btnText: "change mode",
};
